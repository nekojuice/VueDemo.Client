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
      // 嘗試製作layout
      path: '/layout',

      component: () => import('@/views/LayoutView.vue'),
      children: [
        {
          path: '',
          components: {
            default: () => import('@/views/LayoutView.vue'),
            Header: () => import('@/components/HeaderComponent.vue'),
            NavBar: () => import('@/components/NavBar.vue'),
            Footer: () => import('@/components/FooterComponent.vue')
          },
          children: [
            {
              path: '',
              component: () => import('@/views/LayoutViewDefaultView.vue')
            },
            {
              path: 'page01',
              name: 'page01',
              component: () => import('@/views/01_AddFirstPageView.vue')
            },
            {
              path: 'page02',
              name: 'page02',
              component: () => import('../views/02_TemplateSyntax.vue')
            },
            {
              path: 'page03/1',
              name: 'page03/1',
              component: () => import('../views/03_1_Reactivity-fundamentals.vue')
            },
            {
              path: 'page03/2',
              name: 'page03/2',
              component: () => import('../views/03_2_Reactivity-fundamentals_SFC.vue')
            },
            {
              path: 'page03/3',
              name: 'page03/3',
              component: () => import('../views/03_3_Reactivity-fundamentals_reacitive.vue')
            },
            {
              path: 'page04',
              name: 'page04',
              component: () => import('../views/04_computed.vue')
            },
            {
              path: 'page12',
              name: 'page12',
              component: () => import('../views/12_Template-refs.vue')
            },
            {
              path: 't1',
              name: 't1',
              component: () => import('../views/tutorial/01_Declarative-Rendering.vue')
            },
            {
              path: 't2',
              name: 't2',
              component: () => import('../views/tutorial/02_Attribute-Bindings.vue')
            },
            {
              path: 't3',
              name: 't3',
              component: () => import('../views/tutorial/03_Event-Listeners.vue')
            },
            {
              path: 't4',
              name: 't4',
              component: () => import('../views/tutorial/04_Form-Bindings.vue')
            },
            {
              path: 't5',
              name: 't5',
              component: () => import('../views/tutorial/05_Conditional-Rendering.vue')
            },
            {
              path: 't6',
              name: 't6',
              component: () => import('../views/tutorial/06_List-Rendering.vue')
            },
            {
              path: 't7',
              name: 't7',
              component: () => import('../views/tutorial/07_Computed-Property.vue')
            },
            {
              path: 't8',
              name: 't8',
              component: () => import('../views/tutorial/08_Lifecycle-and-Template-Refs.vue')
            },
            {
              path: 't9',
              name: 't9',
              component: () => import('../views/tutorial/09_Watchers.vue')
            }
          ]
        }
      ]
    }
  ]
})

export default router
