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
    {
      path: '/ProvideInjectCase',
      name: 'ProvideInjectCase',
      component: () => import('../views/ProvideInjectCase.vue'),
    },
    {
      path: '/AsyncComponent',
      name: 'AsyncComponent',
      component: () => import('../views/AsyncComponent.vue'),
    },
    {
      path: '/AsyncComponent1',
      name: 'AsyncComponent1',
      component: () => import('../views/AsyncComponent1.vue'),
    },
    {
      path: '/CompositionAPICase',
      name: 'CompositionAPICase',
      component: () => import('../views/CompositionAPICase.vue'),
    },
    {
      path: '/CustomDirectiveCase',
      name: 'CustomDirectiveCase',
      component: () => import('../views/CustomDirectiveCase.vue'),
    },
    {
      path: '/KeyAttrTransition',
      name: 'KeyAttrTransition',
      component: () => import('../views/KeyAttrTransition.vue'),
    },
    {
      path: '/TransitionGroupCase',
      name: 'TransitionGroupCase',
      component: () => import('../views/TransitionGroupCase.vue'),
    },
    {
      path: '/DynamicComponent',
      name: 'DynamicComponent',
      component: () => import('../views/DynamicComponent.vue'),
    },
    {
      path: '/TeleportCase',
      name: 'TeleportCase',
      component: () => import('../views/TeleportCase.vue'),
    },
    {
      path: '/User/:username',
      name: 'User',
      component: () => import('../views/User.vue'),
      children: [
        {
          path: 'posts/:postId',
          name: 'UserPosts',
          component: () => import('../views/UserPosts.vue'),
        },
        {
          path: 'profile/:gender',
          name: 'UserProfile',
          component: () => import('../views/UserProfile.vue'),
        },
      ],
    },
    {
      path: '/BookInfo/id/:id/name/:name',
      name: 'BookInfo',
      component: () => import('../views/BookInfo.vue'),
    },
    {
      path: '/Chapter/:chapters([0-9a-zA-Z]+)+',
      name: 'Chapter',
      strict: true, // 不允许尾部斜线
      sensitive: true, // 默认情况下，所有路由是不区分大小写的，并且能匹配带有或不带有尾部斜线的路由。例如，路由 /users 将匹配 /users、/users/、甚至 /Users/。这种行为可以通过 strict 和 sensitive 选项来修改，它们既可以应用在整个全局路由上，又可以应用于当前路由上。
      component: () => import('../views/Chapter.vue'),
    },
    {
      path: '/main-page',
      name: 'main-page',
      component: () => import('../views/NamedView/main-page.vue'),
      children: [
        {
          path: '',
          components: {
            left: () => import('../views/NamedView/left.vue'),
            middle: () => import('../views/NamedView/middle.vue'),
            right: () => import('../views/NamedView/right.vue'),
          },
        },
      ],
    },
    {
      path: '/home',
      name: 'goto-home',
      redirect: { name: 'home' },
    },
    {
      path: '/main',
      name: 'goto-main',
      redirect: '/main-page',
    },
    {
      path: '/userinfo/:username',
      name: 'userinfo',
      redirect: (from) => {
        return { path: `/User/${from.params.username}` }
      },
    },
    {
      path: '/userinfo1/:username',
      name: 'userinfo1',
      redirect: (from) => {
        return { name: 'User', params: { username: from.params.username } }
      },
    },
  ],
  strict: true, // 默认情况下，所有路由是不区分大小写的，并且能匹配带有或不带有尾部斜线的路由。例如，路由 /users 将匹配 /users、/users/、甚至 /Users/。这种行为可以通过 strict 和 sensitive 选项来修改，它们既可以应用在整个全局路由上，又可以应用于当前路由上。
  sensitive: true, // 大小写敏感
})

export default router
