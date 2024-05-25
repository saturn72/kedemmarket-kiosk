import { getHomePage } from "./api/cms/homePage";
import { HomePage } from "./api/cms/types";

export type HomePageModel = HomePage;

export default async function Page() {
  const model: HomePageModel = await getHomePage();

  return <>
    <h1>This is home page: loading status: <strong>{!model}</strong></h1>
    <p>
      {JSON.stringify(model)}
    </p>
  </>
}
