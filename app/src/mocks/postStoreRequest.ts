import { getUrl } from "@/composable/common/getUrl";
import { http, HttpResponse } from "msw";

export const postStoreRequest = () => {
  const url = getUrl("/msw/", "post/store");
  return [
    http.post(url, () => {
      return new HttpResponse("Created Post Successfully", {
        status: 200,
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }),
  ];
};
