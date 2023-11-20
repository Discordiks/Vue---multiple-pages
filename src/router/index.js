import { createRouter, createWebHistory } from 'vue-router'
import CalcView from '../views/CalcView.vue'
import DataView from '../views/DataView.vue'
import TextView from '../views/TextView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: CalcView
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/data_',
    name: 'data_',
    component: DataView
  },
  {
    path: '/text_',
    name: 'text_',
    component: TextView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
