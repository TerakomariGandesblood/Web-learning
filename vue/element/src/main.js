import Vue from "vue";
import App from "./App.vue";

import Button from "element-ui/lib/button";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(Button);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
