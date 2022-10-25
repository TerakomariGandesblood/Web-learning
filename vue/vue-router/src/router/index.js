import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import UserView from "../views/UserView.vue";

// 可以在任意组件中以 this.$router 的形式访问它当前路由
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/about",
      component: AboutView,
    },
    {
      path: "/user/:id",
      component: UserView,
    },
  ],
});

export default router;
