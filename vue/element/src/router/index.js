import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ExampleView01 from "../views/ExampleView01.vue";
import ExampleView02 from "../views/ExampleView02.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/example01",
      component: ExampleView01,
    },
    {
      path: "/example02",
      component: ExampleView02,
    },
  ],
});

export default router;
