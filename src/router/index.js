import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView'

const routes = [
    {
      path: '/', // ---> path bu browser URL 
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      // alias: '/',  ⬆️tepadigi homeni komentga oganda alias aboutni glavni sahifa qp korsatad
      name: 'about',
      component: () => import(/* webpackChunkName: 'AboutView' */'@/views/AboutView')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import(/* webpackChunkName: 'BlogView' */'@/views/BlogView')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active'
})

export default router