import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: process.env.IS_ELECTRON ? "hash" : "history",
  routes: [
    {
      path: "/",
      name: "landing-page",
      component: require("@/components/LandingPage").default
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
