export type SearchEntry = {
  id: string;
  name: string;
  description?: string;
  src: string;
  slug: string;
  group: string;
  // groupOrigin?: string;
};

export type Slide = {
  src: string;
  alt: string;
  href: string;
};
