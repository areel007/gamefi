import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "GamFi",
    },
  },
  {
    path: "/connect",
    name: "Connect",
    component: () => import("../pages/Connect.vue"),
    meta: {
      title: "GamFi",
    },
  },
  {
    path: "/error-connect",
    name: "Failed",
    component: () => import("../pages/Failed.vue"),
    meta: {
      title: "GamFi",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
