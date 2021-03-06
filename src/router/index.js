import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MainGear from '@/views/MainGear.vue'

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
    component: MainGear
  },
  {
    path: '/weapons',
    component: MainGear
  },
  {
    path: '/charms',
    component: MainGear
  },
  {
    path: '/decorations',
    component: MainGear
  },
  {
    path: '/specialized-tools',
    component: MainGear
  },
  {
    path: '/palico-gear',
    component: MainGear
  },
  {
    path: '/gadgets-grimalkyne',
    component: MainGear
  },
  {
    path: '/pendants',
    component: MainGear
  },
  {
    path: '/crowns',
    component: MainGear
  },
  {
    path: '/research',
    component: MainGear
  },
  {
    path: '/quests',
    component: MainGear
  },
  {
    path: '/deliveries',
    component: MainGear
  },
  {
    path: '/crafting',
    component: MainGear
  },
  {
    path: '/elder',
    component: MainGear
  },
  {
    path: '/room',
    component: MainGear
  },
  {
    path: '/observation',
    component: MainGear
  },
  {
    path: '/guild-card-titles',
    component: MainGear
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
