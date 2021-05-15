import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/armor',
    component: () => import('../views/MainGear.vue')
  },
  {
    path: '/weapons',
    component: () => import('../views/MainGear.vue')
  },
  {
    path: '/charms',
    component: () => import('../views/MainGear.vue')
  },
  {
    path: '/decorations',
    component: () => import('../views/MainGear.vue')
  },
  {
    path: '/specialized-tools',
    component: () => import('../views/MainGear.vue')
  },
  {
    path: '/crowns',
    component: () => import('../views/MainGear.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
