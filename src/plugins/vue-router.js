import { createWebHistory, createRouter } from "vue-router";

import Home from "@/pages/Home.vue";
import Promocoes from "@/pages/Promocoes.vue";
import Usuarios from "@/pages/Usuarios.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/promocoes", component: Promocoes },
  { path: "/usuarios", component: Usuarios },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
