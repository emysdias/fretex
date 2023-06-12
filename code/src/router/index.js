import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/erro-interno",
    name: "InternalError",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/InternalError.vue"),
  },
  {
    path: "/404",
    name: "PageNotFound",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PageNotFound.vue"),
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
