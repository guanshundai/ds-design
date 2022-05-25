import { createRouter, createWebHashHistory } from "vue-router";
import home from "./common/home";

const routes = [...home]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router