import { getUrl } from "@/composable/common/getUrl";
import { http, HttpResponse } from "msw";

export const sampleRequest = () => {
  const url = getUrl("/msw/", "index");
  return [
    http.get(url, () => {
      return HttpResponse.json([
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
      ]);
    }),
  ];
};
