import { getUrl } from "@/composable/common/getUrl";
import { http, HttpResponse } from "msw";

export const postRequest = () => {
  const url = getUrl("/msw/", "post");
  return [
    http.get(url, () => {
      return HttpResponse.json({
        id: 1,
        title: "Post 1",
        body: "this is a sample body 1",
        thumbnailPath: "/img/cat.jpg",
      });
    }),
  ];
};
