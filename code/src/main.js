import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUserSecret,
  faTruck,
  faExclamationCircle,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";
import { faMap, faClock } from "@fortawesome/free-regular-svg-icons";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
library.add(
  faUserSecret,
  faMap,
  faTruck,
  faExclamationCircle,
  faHandHoldingDollar,
  faClock
);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
