import { createRouter, createWebHistory } from "vue-router"
// 路由列表
import VueCaseRoutes from "@/router/modules/VueCase.js"
import DynamicRouterRoutes from "@/router/modules/DynamicRouter.js"
import NamedViewRoutes from "@/router/modules/NamedView.js"
import RouterRedirectRoutes from "@/router/modules/RouterRedirect.js"
import RouterAliasRoutes from "@/router/modules/RouterAlias.js"
import RouterPropsRoutes from "@/router/modules/RouterProps.js"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...VueCaseRoutes, ...DynamicRouterRoutes, ...NamedViewRoutes, ...RouterRedirectRoutes, ...RouterAliasRoutes, ...RouterPropsRoutes],
  strict: true, // 默认情况下，所有路由是不区分大小写的，并且能匹配带有或不带有尾部斜线的路由。例如，路由 /users 将匹配 /users、/users/、甚至 /Users/。这种行为可以通过 strict 和 sensitive 选项来修改，它们既可以应用在整个全局路由上，又可以应用于当前路由上。
  sensitive: true, // 大小写敏感
})

export default router
