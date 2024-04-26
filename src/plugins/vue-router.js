import { createWebHistory, createRouter } from "vue-router";

import Home from "@/pages/Home.vue";
import Promocoes from "@/pages/Promocoes.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/promocoes", component: Promocoes },
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});