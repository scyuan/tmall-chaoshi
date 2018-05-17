import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Flop from '@/views/Flop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/flop',
      name: 'Flop',
      component:Flop
    }
  ]
})
