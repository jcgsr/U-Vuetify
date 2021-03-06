import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import 'animate.css'
import router from './router'

import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
