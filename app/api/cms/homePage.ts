import { unstable_cache as cache } from "next/cache";
import { getSearchEntries } from "../search";
import { HomePage } from "./types";
import { Slide } from "../search/types";
const slides = [
  {
    src: "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    alt: "hero-al0",
    href: "/hero-al0",
  },
  {
    src: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    alt: "hero-alt-1",
    href: "/hero-alt-1",
  },
  {
    src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
    alt: "hero-alt-2",
    href: "/hero-alt-2",
  },
  {
    src: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    alt: "hero-alt-3",
    href: "/hero-alt-3",
  },
];

const slidesKeyParts = ["home-page-slides"];
const slidesTags = ["cms", "home-page", "slides"];
async function acquireHomePageSlides(): Promise<Slide[]> {
  return Promise.resolve(slides);
}
const homepageKeyParts = ["home-page"];
const homepageTags = ["cms", "home-page"];

async function acquireHomePage(): Promise<HomePage> {
  const search = await getSearchEntries();
  const slides = await getHomePageSlides();
  return {
    slides,
    search,
  };
}

async function getHomePageSlides(): Promise<Slide[]> {
  const f = cache(async () => acquireHomePageSlides(), slidesKeyParts, {
    tags: slidesTags,
  });
  return f();
}

export async function getHomePage(): Promise<HomePage> {
  const f = cache(async () => acquireHomePage(), homepageKeyParts, {
    tags: homepageTags,
  });
  return f();
}
