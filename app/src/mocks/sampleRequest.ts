import { getUrl } from "@/composable/common/getUrl";
import { http, HttpResponse } from "msw";

export const sampleRequest = () => {
  const url = getUrl("/msw/", "index");
  return [
    http.get(url, ({ request }) => {
      const url = new URL(request.url);
      const page = url.searchParams.get("page") ?? "1";

      if (page === "2") {
        return HttpResponse.json({
          posts: [
            {
              id: 6,
              title: "Post 6",
              body: "this is a sample body 6",
            },
            {
              id: 7,
              title: "Post 7",
              body: "this is a sample body 7",
            },
            {
              id: 8,
              title: "Post 8",
              body: "this is a sample body 8",
            },
            {
              id: 9,
              title: "Post 9",
              body: "this is a sample body 9",
            },
            {
              id: 10,
              title: "Post 10",
              body: "this is a sample body 10",
            },
          ],
          max_page: 2,
        });
      }
      return HttpResponse.json({
        posts: [
          {
            id: 1,
            title: "Post 1",
            body: "this is a sample body 1",
            thumbnailPath: "/img/cat.jpg",
          },
          {
            id: 2,
            title: "Post 2",
            body: "this is a sample body 2",
            thumbnailPath: "/img/cat.jpg",
          },
          {
            id: 3,
            title: "Post 3",
            body: "this is a sample body 3",
          },
          {
            id: 4,
            title: "Post 4",
            body: "this is a sample body 4",
          },
          {
            id: 5,
            title: "Post 5",
            body: "this is a sample body 5",
          },
        ],
        max_page: 2,
      });
    }),
  ];
};
