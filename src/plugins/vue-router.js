import { createWebHistory, createRouter } from "vue-router";

import Home from "@/pages/Home.vue";
import Promocoes from "@/pages/Promocoes.vue";
import Usuarios from "@/pages/Usuarios.vue";
import Cupons from "@/pages/Cupons.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/promocoes", component: Promocoes },
  { path: "/usuarios", component: Usuarios },
  { path: "/cupons", component: Cupons },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
