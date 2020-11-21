import { createRouter, createWebHashHistory } from 'vue-router'
import App from '../views/App'
import Login from '@/views/Login'
import Register from '@/views/Register'

const routes = [
  {
    path: '/',
    name: 'routeApp',
    component: App
  },
  {
    path: '/login',
    name: 'routeLogin',
    component: Login
  },
  {
    path: '/registrar',
    name: 'routeRegister',
    component: Register
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
