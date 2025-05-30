import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Menu from '../components/Menu.vue'
import Order from '../components/Order.vue'
import Profile from '../components/Profile.vue'
import AdminDashboard from '../components/AdminDashboard.vue'
import ManageFood from '../components/ViewOrdersTemp.vue'
import Login from '../components/Login.vue' 
import ViewOrdersTemp from '../components/ViewOrdersTemp.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/Order',
    name: 'Order',
    component: Order
  },
  {
    path: '/Profile',
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
        path: 'Managefood',
        name: 'ManageFood',
        component: ManageFood
      },
      {
        path: 'ViewOrdersTempt',
        name: 'ViewOrders',
        component: ViewOrdersTemp
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
