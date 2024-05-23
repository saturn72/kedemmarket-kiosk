export async function GET(req: Request) {
  //   const token = req.headers.get("Authorization");
  //   const user = await getUserIfInRole(token, "registered");

  return Response.json(
    {
      datasources: [
        {
          name: "1234",
        },
        {
          name: "abcd",
        },
      ],
    },
    { status: 200 }
  );
}
