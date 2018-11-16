import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [{
    path: '/h5/tf/qqreader_181109',
    redirect: '/home'
  } , {
    path: '/h5/tf/qqreader_181109/:url',
    name: 'home',
    component: resolve => require(['../pages/Home'], resolve)
  }]
})
