import {createRouter, createWebHistory} from 'vue-router'
import Auth from '@/views/Auth'
import Orders from '@/views/Orders'
import AddOrder from '@/views/AddOrder'
import E404 from '@/views/E404'

const authGuard = function (to, from, next) {
  if (!localStorage.getItem('token')) {
    next({name: 'auth'})
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'auth',
    component: Auth
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders,
    beforeEnter: authGuard
  },
  {
    path: '/order',
    name: 'order',
    component: AddOrder,
    beforeEnter: authGuard
  },
  {
    path: '/:any(.*)',
    name: 'E404',
    component: E404,
    beforeEnter: authGuard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
