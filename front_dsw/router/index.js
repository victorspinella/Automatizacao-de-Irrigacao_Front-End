import { createRouter, createWebHistory } from  "vue-router";

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import("../views/index.vue") },
        { path: "/register", component: () => import("../views/Register.vue") },
        { path: "/sign-in", component: () => import("../views/SignIn.vue") },
        { path: "/", component: () => import("../views/Home.vue") },
    ]
});

export default router;