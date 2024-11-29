/**
 * https://zenn.dev/rsi_dev/articles/dad6c6c25ed970
 */
import { useAuthStore } from "@/stores/useAuthStore";
import axios from "axios";
import { storeToRefs } from "pinia";

const _axios = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// for login
_axios.interceptors.request.use(
  (request) => {
    const authStore = useAuthStore();
    const { accessToken } = storeToRefs(authStore);

    if (accessToken) {
      request.headers.Authorization = `Bearer ${accessToken}`;
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 401エラーになった場合のリトライ制御: 無限ループ対策
let isTried = false;
_axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const authStore = useAuthStore();
    const { refreshToken } = storeToRefs(authStore);
    const { login, logout } = authStore;

    if (error.response.status === 401 && !isTried) {
      isTried = true;

      // Refresh Tokenを使用して新しいAccess Tokenを取得、取得できない場合はRefresh Tokenの期限切れとなる
      const token = await _axios.post("/Authentication/token/refresh", {
        refreshToken,
      });
      if (token.status === 200) {
        // Access TokenをStoreで保持
        login(token.data.accessToken, refreshToken.value);

        // 新しいAccess Tokenを取得する前の元のリクエスト処理を再開
        return _axios.request({
          ...error.config,
          headers: {
            Authorization: `'Bearer ${token.data.accessToken}`,
          },
        });
      }
    } else if (error.response.status === 401 && isTried) {
      // ログアウト
      logout();

      // NOTE: Vue Routerを使用できないので以下のwindow.locationで対応
      window.location.href = "session-time-out";
    }

    return Promise.reject(error);
  },
);

export default _axios;
