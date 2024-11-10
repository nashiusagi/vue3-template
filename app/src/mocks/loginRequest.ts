import { getUrl } from "@/composable/common/getUrl";
import { http, HttpResponse } from "msw";

export const loginRequest = () => {
  const url = getUrl("/msw/", "login");
  return [
    http.post(url, () => {
      return HttpResponse.json({
        accessToken: "mockedAccessToken",
        refreshToken: "mockedRefreshToken",
      });
    }),
  ];
};
