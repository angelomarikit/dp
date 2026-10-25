import type { LucideIcon } from "lucide-react";
import {
  Plane,
  Map,
  Waves,
  ClipboardCheck,
  MapPinned,
  ShieldCheck,
  Layers,
  Ruler,
  Grid3x3,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  coordinate: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const servicesNote =
  "Land surveying services to establish and verify boundaries, support construction, and provide survey data for development and property transactions.";

export const services: ServiceItem[] = [
  {
    id: "caap-height",
    coordinate: "N 01°",
    title: "CAAP Height Clearance Survey",
    description:
      "Height and obstruction surveys coordinated for aviation clearance requirements and related technical submissions.",
    icon: Plane,
  },
  {
    id: "lot-plan-vicinity",
    coordinate: "E 02°",
    title: "Lot Plan with Vicinity Map",
    description:
      "Prepared lot plans with vicinity mapping to show property location, adjoining parcels, and contextual site references.",
    icon: Map,
  },
  {
    id: "bathymetric",
    coordinate: "S 03°",
    title: "Bathymetric Survey",
    description:
      "Underwater depth and seabed measurements to support coastal, marine, and water-related engineering and planning needs.",
    icon: Waves,
  },
  {
    id: "as-built",
    coordinate: "W 04°",
    title: "As-Built Survey",
    description:
      "Documentation of constructed features and finished works as built on site for verification, records, and project closeout.",
    icon: ClipboardCheck,
  },
  {
    id: "relocation",
    coordinate: "N 05°",
    title: "Relocation Survey",
    description:
      "Re-establishment of property corners and boundaries based on available land title documents, approved survey plans, and relevant survey records.",
    icon: MapPinned,
  },
  {
    id: "boundary-verification",
    coordinate: "E 06°",
    title: "Boundary Verification Survey",
    description:
      "Identification and checking of property boundaries to help determine the location of lot corners and assess possible boundary discrepancies or encroachments.",
    icon: ShieldCheck,
  },
  {
    id: "topographic",
    coordinate: "S 07°",
    title: "Topographic Survey",
    description:
      "Collection of ground elevations, contours, and existing site features to support engineering design, site planning, and land development.",
    icon: Layers,
  },
  {
    id: "construction",
    coordinate: "W 08°",
    title: "Construction Survey",
    description:
      "Establishment of survey control points and setting out of specified locations, alignments, and elevations in accordance with approved project plans.",
    icon: Ruler,
  },
  {
    id: "subdivision-consolidation",
    coordinate: "N 09°",
    title: "Subdivision and Consolidation Surveys",
    description:
      "Division of land parcels or the consolidation of adjoining lots, subject to applicable technical and regulatory requirements.",
    icon: Grid3x3,
  },
];
