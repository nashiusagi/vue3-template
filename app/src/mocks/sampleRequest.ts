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
        {
          id: 11,
          title: "Post 11",
          body: "this is a sample body 11",
        },
        {
          id: 12,
          title: "Post 12",
          body: "this is a sample body 12",
        },
      ]);
    }),
  ];
};
