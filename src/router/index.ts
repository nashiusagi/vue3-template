import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/index",
    component: () => import("@/pages/index.vue"),
  },
  {
    path: "/sample",
    component: () => import("@/pages/sample.vue"),
  },
  {
    path: "/post/:id",
    component: () => import("@/pages/show.vue"),
  },
  {
    path: "/post/create",
    component: () => import("@/pages/create.vue"),
  },
];

export const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});
