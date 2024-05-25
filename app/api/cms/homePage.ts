import { unstable_cache as cache } from "next/cache";
import { getSearchEntries } from "../search";
import { HomePage } from "./types";

const keyParts = ["home-page"];
const tags = ["cms", "home-page"];

async function acquireHomePage(): Promise<HomePage> {
  const search = await getSearchEntries();

  return {
    search,
  };
}
export async function getHomePage(): Promise<HomePage> {
  return cache(async () => acquireHomePage(), keyParts, {
    tags,
  })();
}
