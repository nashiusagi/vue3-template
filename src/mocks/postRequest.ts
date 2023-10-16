import { getUrl } from "@/composable/common/getUrl";
import { rest } from "msw";

export const postRequest = () => {
  const url = getUrl("/msw/", "post");
  return [
    rest.get(url, (_, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          id: 1,
          title: "Post 1",
          body: "this is a sample body 1",
        }),
      );
    }),
  ];
};
