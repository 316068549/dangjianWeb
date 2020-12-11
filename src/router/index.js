import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import test from './test'
import base from './base'
import home from './home'
import onlineShop from './onlineShop'


export const constantRouterMap = [
  base,
  test,
    home,
];


export const asyncRouterMap = [
  // home,
  onlineShop
];

export default new VueRouter({
  routes: constantRouterMap,
})






