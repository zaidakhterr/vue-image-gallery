import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/photo/:id",
    name: "Photo",
    component: () => import("../views/Photo.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "hash",
});

export default router;
