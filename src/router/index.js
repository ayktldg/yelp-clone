import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/businesses/:id",
    name: "BusinessDetail",
    component: () =>
      import(
        /* webpackChunkName: "busines-detail" */ "../views/BusinessDetail.vue"
      ),
  },
  {
    path: "/businesses/:location/:search",
    name: "SearchResults",
    component: () =>
      import(/* webpackChunkName: "businesses" */ "../views/SearchResults.vue"),
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
