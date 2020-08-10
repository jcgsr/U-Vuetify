import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import MathVue from './components/MathVue'
import Info from './components/Info'

Vue.use(Router)

export default new Router({
   mode: "history",
   linkExactActiveClass: 'link-active',
   routes: [{
      path: '/',
      name: 'home',
      component: Home
   }, {
      path: '/math',
      name: 'math',
      component: MathVue
   }, {
      path: '/info',
      name: 'info',
      component: Info
   }]
})