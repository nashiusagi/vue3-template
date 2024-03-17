import { createApp } from "vue";
import "./style.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import { router } from "./router";

async function mswWorker() {
  if (import.meta.env.VITE_MOCKED_API === "true") {
    const { buildMswWorker } = await import("./mocks/handlers");
    const worker = buildMswWorker();
    worker.start({ onUnhandledRequest: "bypass" });
  }
  return Promise.resolve();
}

mswWorker().then(() => {
  const app = createApp(App);
  app.use(router);
  app.use(ElementPlus);
  app.mount("#app");
});
