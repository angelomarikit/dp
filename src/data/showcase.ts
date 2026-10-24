export interface ShowcaseImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

/** Client field documentation — replace captions when project names are confirmed. */
export const showcaseImages: ShowcaseImage[] = [
  {
    id: "field-01",
    src: "/images/showcase/field-01.jpg",
    alt: "Surveyor adjusting a total station beside a service vehicle on a commercial corridor",
    caption: "Total station setup on site",
  },
  {
    id: "field-02",
    src: "/images/showcase/field-02.jpg",
    alt: "Surveyor operating a total station with urban retail buildings in the background",
    caption: "Instrument work near commercial areas",
  },
  {
    id: "field-03",
    src: "/images/showcase/field-03.jpg",
    alt: "Field crew coordinating measurements along a roadside with power lines overhead",
    caption: "Roadside survey coordination",
  },
  {
    id: "field-04",
    src: "/images/showcase/field-04.jpg",
    alt: "Surveyor at a drive-thru lane with surveying pole and safety vest",
    caption: "Drive-thru property survey",
  },
  {
    id: "field-05",
    src: "/images/showcase/field-05.jpg",
    alt: "Surveyor marking ground points near a fast-food restaurant drive-thru",
    caption: "Commercial boundary marking",
  },
  {
    id: "field-06",
    src: "/images/showcase/field-06.jpg",
    alt: "Surveyor using a total station beside a tricycle on a roadside",
    caption: "Urban roadside measurement",
  },
  {
    id: "field-07",
    src: "/images/showcase/field-07.jpg",
    alt: "Surveyor sighting through a total station on a paved street",
    caption: "Line-of-sight total station work",
  },
  {
    id: "field-08",
    src: "/images/showcase/field-08.jpg",
    alt: "Vacant residential lot with boundary stakes and survey ribbon",
    caption: "Lot boundary documentation",
  },
  {
    id: "field-09",
    src: "/images/showcase/field-09.jpg",
    alt: "GNSS rover pole and bipod on grass near a residential street",
    caption: "GNSS rover on residential lot",
  },
  {
    id: "field-10",
    src: "/images/showcase/field-10.jpg",
    alt: "Survey crew clearing vegetation along a curved residential road",
    caption: "Road alignment & staking",
  },
  {
    id: "field-11",
    src: "/images/showcase/field-11.jpg",
    alt: "Surveyor with rover pole on a grassy lot beside new homes",
    caption: "Subdivision field survey",
  },
  {
    id: "field-12",
    src: "/images/showcase/field-12.jpg",
    alt: "Red survey mark painted on a curb near overgrown vegetation",
    caption: "Curb and easement marking",
  },
  {
    id: "field-13",
    src: "/images/showcase/field-13.jpg",
    alt: "Two surveyors adjusting an auto-level near a coastal field",
    caption: "Auto-level setup on open ground",
  },
  {
    id: "field-14",
    src: "/images/showcase/field-14.jpg",
    alt: "Surveyor with GNSS rover and colleague reviewing data on a phone",
    caption: "GNSS data check on site",
  },
  {
    id: "field-15",
    src: "/images/showcase/field-15.png",
    alt: "Surveyor with tripod equipment in a rice field beneath transmission lines",
    caption: "Agricultural parcel survey",
  },
  {
    id: "field-16",
    src: "/images/showcase/field-16.jpg",
    alt: "Survey team with GNSS bipod on a paved road in a subdivision",
    caption: "Pavement level GNSS fix",
  },
  {
    id: "field-17",
    src: "/images/showcase/field-17.jpg",
    alt: "Surveyor spray-marking a curb on a concrete road",
    caption: "Road edge marking",
  },
  {
    id: "field-18",
    src: "/images/showcase/field-18.jpg",
    alt: "Surveyor at a total station tripod in an open grassy field",
    caption: "Open-field total station work",
  },
  {
    id: "field-19",
    src: "/images/showcase/field-19.jpg",
    alt: "Surveyor with GNSS pole under a tree canopy",
    caption: "GNSS work near tree cover",
  },
  {
    id: "field-20",
    src: "/images/showcase/field-20.jpg",
    alt: "Two surveyors with auto-level equipment overlooking a coastal lot",
    caption: "Coastal property survey",
  },
  {
    id: "field-21",
    src: "/images/showcase/field-21.jpg",
    alt: "Surveyors with GNSS and data collector on a residential street",
    caption: "Neighborhood GNSS survey",
  },
];

/** Number of slides visible at once on large screens (auto-scroll strip). */
export const showcaseVisibleCount = 6;
