import Vue from "vue";
import App from "./App.vue";

import "./assets/base.css";

import store from "./store";

new Vue({
  render: (h) => h(App),
  store: store,
}).$mount("#app");
