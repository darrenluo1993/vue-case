import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/elementUICase',
      name: 'elementUICase',
      component: () => import('../views/ElementUICase.vue'),
    },
    {
      path: '/computedProps',
      name: 'computedProps',
      component: () => import('../views/ComputedProps.vue'),
    },
    {
      path: '/classStyleBinding',
      name: 'classStyleBinding',
      component: () => import('../views/ClassStyleBinding.vue'),
    },
    {
      path: '/conditionalRendering',
      name: 'conditionalRendering',
      component: () => import('../views/ConditionalRendering.vue'),
    },
    {
      path: '/listRendering',
      name: 'listRendering',
      component: () => import('../views/ListRendering.vue'),
    },
    {
      path: '/VModelCase',
      name: 'VModelCase',
      component: () => import('../views/VModelCase.vue'),
    },
    {
      path: '/TransmitAttrs',
      name: 'TransmitAttrs',
      component: () => import('../views/TransmitAttrs.vue'),
    },
    {
      path: '/SlotCase',
      name: 'SlotCase',
      component: () => import('../views/SlotCase.vue'),
    },
  ],
})

export default router
