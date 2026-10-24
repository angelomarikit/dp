import type { LucideIcon } from "lucide-react";
import { MapPinned, Layers, Grid3x3, Ruler } from "lucide-react";

export interface ServiceItem {
  id: string;
  coordinate: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Prospective offering — confirm with owner before publishing. */
  pendingOwnerConfirmation: boolean;
}

export const servicesNote =
  "Service categories below are prospective and should be confirmed by the owner before production publishing.";

export const services: ServiceItem[] = [
  {
    id: "boundary",
    coordinate: "N 01°",
    title: "Boundary and Relocation Surveys",
    description:
      "Support for property boundary definition and relocation-related measurements, coordinated with your project requirements.",
    icon: MapPinned,
    pendingOwnerConfirmation: true,
  },
  {
    id: "topographic",
    coordinate: "E 02°",
    title: "Topographic Surveys",
    description:
      "Site terrain and feature mapping to help teams understand elevation, contours, and existing conditions on the ground.",
    icon: Layers,
    pendingOwnerConfirmation: true,
  },
  {
    id: "subdivision",
    coordinate: "S 03°",
    title: "Subdivision Surveys",
    description:
      "Measurement support aligned with subdivision planning needs, subject to scope and documentation provided.",
    icon: Grid3x3,
    pendingOwnerConfirmation: true,
  },
  {
    id: "construction",
    coordinate: "W 04°",
    title: "Construction Layout and Site Surveys",
    description:
      "On-site layout and verification measurements to help construction teams position work according to agreed plans.",
    icon: Ruler,
    pendingOwnerConfirmation: true,
  },
];
