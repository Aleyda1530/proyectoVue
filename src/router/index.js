// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Constancia from "../views/Constancia.vue";

const routes = [
  {
    path: "/constancia/:cui",
    name: "constancia",
    component: Constancia,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
