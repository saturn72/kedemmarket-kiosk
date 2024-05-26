import { Carousel } from "@components/common/Carousel";
import { getHomePage } from "./api/cms/homePage";
import { HomePage } from "./api/cms/types";

export type HomePageModel = HomePage;

export default async function Page() {
  const model: HomePageModel = await getHomePage();

  return <>
    <Carousel slides={model.slides} />
  </>
}
