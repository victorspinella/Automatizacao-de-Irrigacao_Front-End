import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createRouter, createWebHistory } from  "vue-router";

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        // { path: "/", component: () => import("../views/index.vue") },
        { path: "/register", component: () => import("../views/Register.vue") },
        { path: "/sign-in", component: () => import("../views/SignIn.vue") },
        { path: "/status", 
        component: () => import("../views/status.vue"),
        meta: {
            requiresAuth: true,
        },
    },
    ]
});

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener();
                resolve(user);
            },
            reject
        );
    });
};

router.beforeEach(async(to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (await getCurrentUser()) {
            next();
        } else {
            alert("you dont have access!");
            next("/");
        }
    } else {
        next();
    }
});

export default router;