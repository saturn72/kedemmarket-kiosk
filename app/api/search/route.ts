import { getSearchEntries } from ".";

export async function GET(req: Request) {
  const entries = await getSearchEntries();
  return Response.json({ entries }, { status: 200 });
}
