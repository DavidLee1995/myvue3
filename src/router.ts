import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Create from './views/CreatePost.vue'
import Login from './views/Login.vue'
import Column from './views/columnDetail.vue'
import store from './store'
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
        component: Login,
        meta: {
          redirectAlreadyLogin: true
        }
      },
      {
        path: '/column/:id',
        name: 'Column',
        component: Column
      },
      {
        path: '/create',
        name: 'Create',
        component: Create,
        meta: {
          requiredLogin: true
        }
      }
    ]
  }
)
router.beforeEach((to, form, next) => {
  if (to.meta.requiredLogin && !store.state.user.isLogin) {
    next({ name: 'login' })
  } else if (to.meta.redirectAlreadyLogin && store.state.user.isLogin) {
    next('/')
  } else {
    next()
  }
})

export default router
