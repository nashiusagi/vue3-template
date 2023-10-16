import { getUrl } from "@/composable/common/getUrl";
import { rest } from "msw";

export const postStoreRequest = () => {
  const url = getUrl("/msw/", "post/store");
  return [
    rest.post(url, (_, res, ctx) => {
      return res(ctx.status(200));
    }),
  ];
};
