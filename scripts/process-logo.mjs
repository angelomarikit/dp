import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const source = path.join(root, "public", "image", "logo", "dp logo.jpg");
const outDir = path.join(root, "public", "images", "logo");

async function removeWhiteBackground(inputPath, outputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const pixels = new Uint8ClampedArray(data);

  for (let i = 0; i < pixels.length; i += channels) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const saturation = max === 0 ? 0 : (max - min) / max;

    // Near-white background: high luminance, low saturation (green logo stays opaque)
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    const isBackground =
      luminance > 240 && saturation < 0.12 && r > 230 && g > 230 && b > 230;

    if (isBackground) {
      pixels[i + 3] = 0;
    } else if (luminance > 220 && saturation < 0.08) {
      // Soft edge feather for anti-aliased white fringe
      const t = (luminance - 220) / 35;
      pixels[i + 3] = Math.round(pixels[i + 3] * (1 - Math.min(1, t)));
    }
  }

  await sharp(Buffer.from(pixels), { raw: { width, height, channels } })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(outputPath);
}

async function extractEmblem(fullPath, emblemPath) {
  const meta = await sharp(fullPath).metadata();
  const cropWidth = Math.round(meta.width * 0.28);
  await sharp(fullPath)
    .extract({ left: 0, top: 0, width: cropWidth, height: meta.height })
    .png()
    .toFile(emblemPath);
}

fs.mkdirSync(outDir, { recursive: true });

const transparent = path.join(outDir, "dp-land-surveying-transparent.png");
const emblem = path.join(outDir, "dp-land-surveying-emblem.png");

await removeWhiteBackground(source, transparent);
await extractEmblem(transparent, emblem);

console.log("Created:", transparent);
console.log("Created:", emblem);
