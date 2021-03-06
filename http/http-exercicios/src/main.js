import Vue from "vue";
import App from "./App.vue";
import "./plugins/bootstrap-vue";
import "mutationobserver-shim";
import "@babel/polyfill";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
