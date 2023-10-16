import { getUrl } from "@/composable/common/getUrl";
import { rest } from "msw";

export const sampleRequest = () => {
  const url = getUrl("/msw/", "index");
  return [
    rest.get(url, (_, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            id: 1,
            title: "Post 1",
            body: "this is a sample body 1",
          },
          {
            id: 2,
            title: "Post 2",
            body: "this is a sample body 2",
          },
        ]),
      );
    }),
  ];
};
