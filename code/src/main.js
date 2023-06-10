import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from "./App.vue"
import VueRouter from 'vue-router';
import router from './router';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { library } from '@fortawesome/fontawesome-svg-core'

/* add icons to the library */

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// library.add(faUserSecret)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
