import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  /*mode: 'history',*/
  routes: [
    {
      path: '/:url',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      redirect: '/181109_a'
    }
  ]
})
