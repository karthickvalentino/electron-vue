import Vue from "vue";

import App from "./App";
import router from "./router";
import store from "./store";
// import Vuetify from "./vuetify";
import Vuetify from "../plugins/vuetify";

if (!process.env.IS_WEB) Vue.use(require("vue-electron"));
Vue.config.productionTip = false;
// Vue.use(Vuetify);
/* eslint-disable no-new */
new Vue({
  // Vuetify,
  vuetify: Vuetify,
  components: { App },
  router,
  store,

  // template: "<App/>",
  render: h => h(App)
  // created() {
  //   // Prevent blank screen in Electron builds
  //   this.$router.push("/");
  // },
}).$mount("#app");
