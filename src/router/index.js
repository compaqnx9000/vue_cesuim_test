/*
 * @Descripttion: 
 * @version: 
 * @Author: alan.lau
 * @Date: 2022-04-14 13:31:56
 * @LastEditors: alan.lau
 * @LastEditTime: 2022-04-14 14:17:11
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
