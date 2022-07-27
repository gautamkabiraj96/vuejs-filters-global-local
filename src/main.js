import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.filter("getStringLength", function (str) {
  if (!str) return 0;
  return str.length;
});

new Vue({
  render: (h) => h(App)
}).$mount("#app");
