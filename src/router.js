import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import MathVue from './components/MathVue'
import MediaEscolar from './components/MediaEscolar'
import Conversor from './components/Conversor'
import Cambio from './components/Cambio'
import Afinador from './components/Afinador'
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
   }, {
      path: '/media',
      name: 'media',
      component: MediaEscolar
   }, {
      path: '/conversor',
      name: 'conversor',
      component: Conversor
   }, {
      path: '/cambio',
      name: 'cambio',
      component: Cambio
   }, {
      path: '/afinador',
      name: 'afinador',
      component: Afinador
   }]
   
})