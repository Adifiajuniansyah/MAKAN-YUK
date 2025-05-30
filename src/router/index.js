import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Menu from '../components/Menu.vue'
import Order from '../components/Order.vue'
import Profile from '../components/Profile.vue'
import AdminDashboard from '../components/AdminDashboard.vue'
import ManageFood from '../components/ManageFood.vue'
import ViewOrders from '../components/ViewOrders.vue'
import Login from '../components/Login.vue' 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/login',       
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: AdminDashboard,
    children: [
      {
        path: 'manage-food',
        name: 'ManageFood',
        component: ManageFood
      },
      {
        path: 'view-orders',
        name: 'ViewOrders',
        component: ViewOrders
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
