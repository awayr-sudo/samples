import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "dialogs" */ '../views/Home.vue'),
   
  },

  {
    path: '/dialog',
    name: 'dialog',
    component: () => import(/* webpackChunkName: "dialogs" */ '../views/comp2.vue'),

  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "logout" */ '../views/About.vue'),

  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../public/views/Login.vue'),

  },

  {
    path: '/signup',
    name: 'signup',
    component: () => import('../public/views/Signup.vue'),


  },

  {
    path: '/ginfo',
    name: 'ginfo',
    component: () => import(/* webpackChunkName: "logout" */ '../views/pages/employees/GeneralInfo.vue'),
   
   
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
