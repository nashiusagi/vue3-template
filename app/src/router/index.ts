import {
  createRouter,
  createWebHistory,
  type Router,
  type RouteRecordRaw,
} from "vue-router";
import _axios from "@/plugins/axios";
import { useAuthStore } from "@/stores/useAuthStore";
import { storeToRefs } from "pinia";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/index",
    component: () => import("@/pages/IndexPage.vue"),
  },
  {
    path: "/sample",
    component: () => import("@/pages/SamplePage.vue"),
  },
  {
    path: "/post/:id",
    component: () => import("@/pages/ShowPost.vue"),
  },
  {
    path: "/post/create",
    component: () => import("@/pages/CreatePost.vue"),
    meta: { requiredAuth: true },
  },
  {
    path: "/login",
    component: () => import("@/pages/LoginPage.vue"),
  },
];

export const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, _, next) => {
  if (to.matched.some((record) => record.meta.requiredAuth)) {
    /**
     * NOTE: アクセストークンの有効性チェック
     * 認証エラーになった場合はaxiosの共通処理で自動的にRefresh Tokenを使用してAccess Tokenを再取得する
     * アクセストークンの再取得に失敗した場合はログアウト処理を行い、セッションタイムアウト画面へ自動的に遷移する
     * catchに空の関数を渡す必要がある, ないとエラーになってしまう
     */
    await _axios.post("Authentication/token/verify").catch(() => {});

    const authStore = useAuthStore();
    const { isLoggedIn } = storeToRefs(authStore);

    if (!isLoggedIn.value) {
      next("/login");
    }
  }

  next();
});
