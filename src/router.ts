import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Column from './views/columnDetail.vue'
const routerHistory = createWebHistory()
const router = createRouter(
  {
    history: routerHistory,
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/column/:id',
        name: 'Column',
        component: Column
      }
    ]
  }
)

export default router