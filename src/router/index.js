import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/page01',
      name: 'page01',
      component: () => import('../views/01_AddFirstPageView.vue')
    },
    {
      path: '/page02',
      name: 'page02',
      component: () => import('../views/02_TemplateSyntax.vue')
    },
    {
      path: '/page03/1',
      name: 'page03/1',
      component: () => import('../views/03_1_Reactivity-fundamentals.vue')
    },
    {
      path: '/page03/2',
      name: 'page03/2',
      component: () => import('../views/03_2_Reactivity-fundamentals_SFC.vue')
    },
    {
      path: '/page03/3',
      name: 'page03/3',
      component: () => import('../views/03_3_Reactivity-fundamentals_reacitive.vue')
    },
    {
      path: '/page12',
      name: 'page12',
      component: () => import('../views/12_Template-refs.vue')
    }
  ]
})

export default router
