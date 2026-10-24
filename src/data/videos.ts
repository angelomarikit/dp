export interface FieldVideo {
  id: string;
  src: string;
  title: string;
  description: string;
}

export const fieldVideos: FieldVideo[] = [
  {
    id: "video-01",
    src: "/videos/field-survey-01.mp4",
    title: "On-site survey coordination",
    description: "Field team alignment and instrument setup during an active survey visit.",
  },
  {
    id: "video-02",
    src: "/videos/field-survey-02.mp4",
    title: "Measurement in the field",
    description: "Documented surveying work as measurements are taken on location.",
  },
  {
    id: "video-03",
    src: "/videos/field-survey-03.mp4",
    title: "Property & boundary context",
    description: "Site walkthrough footage supporting boundary and layout discussions.",
  },
];
