

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('../views/demo.vue')
  }
  ,
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
