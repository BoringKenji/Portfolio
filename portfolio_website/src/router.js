import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/Home" },
    { path: "/Home", component: () => import("./pages/Home.vue") },
    { path: "/resume", component: () => import("./pages/Resume.vue") },
    { path: "/portfolio", component: () => import("./pages/Portfolio.vue") },
    { path: "/books", component: () => import("./pages/Books.vue") },
    { path: "/blog", component: () => import("./pages/Blog.vue") },
    { path: "/contact", component: () => import("./pages/Contact.vue") },
    { path: "/:notFound(.*)", component: null },
  ],
});

export default router;
