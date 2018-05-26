import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout.vue'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    name: 'HelloWorld',
    component: Layout,
    children: [{
      path: 'lll',
      component: _import('auth/login'),
      name: 'main'

    }]
  },
  {
    path: '/login',
    name: 'login',
    component: require('@/views/auth/login.vue')
  }
]

export default new Router({
  // mode: 'history', // require service support
  routes: constantRouterMap
})

export const asyncRouterMap = [
]
