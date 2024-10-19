import {
  createRouter,
  createWebHistory,
  type Router,
  type RouteRecordRaw,
} from "vue-router";

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
  },
];

export const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});
