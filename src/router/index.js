import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/main.vue'),
  },
  {
    path: '/rule',
    name: 'Rule',
    component: () => import('../views/rule.vue'),
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('../views/my.vue'),
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('../views/info.vue'),
  },
  {
    path: '/share',
    name: 'Share',
    component: () => import('../views/share.vue'),
  },
  {
    path: '/address',
    name: 'Address',
    component: () => import('../views/address.vue'),
  },
  {
    path: '/chance',
    name: 'Chance',
    component: () => import('../views/chance.vue'),
  },
  {
    path: '/not-chance',
    name: 'NotChance',
    component: () => import('../views/not-chance.vue'),
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/list.vue'),
  },
  // ---------------
]

const router = new VueRouter({
  routes,
})

export default router
