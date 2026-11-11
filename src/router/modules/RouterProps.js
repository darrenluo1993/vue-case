import RouterProps from "@/views/RouterProps.vue"

import NamedViewRouterProps from "@/views/NamedViewRouterProps/NamedViewRouterProps.vue"
import Left from "@/views/NamedViewRouterProps/Left.vue"
import Middle from "@/views/NamedViewRouterProps/Middle.vue"
import Right from "@/views/NamedViewRouterProps/Right.vue"

export default [
  {
    path: "/RouterProps/:id/:name/:price",
    name: "RouterProps",
    props: true, // 当 props 设置为 true 时，route.params 将被设置为组件的 props。
    component: RouterProps,
  },
  {
    path: "/NamedViewRouterProps/:id/:name/:price",
    name: "NamedViewRouterProps",
    component: NamedViewRouterProps,
    children: [
      {
        path: "",
        props: {
          left: false,
          middle: true,
          right: false,
        }, // 当 props 设置为 true 时，route.params 将被设置为组件的 props。
        components: {
          left: Left,
          middle: Middle,
          right: Right,
        },
      },
    ],
  },
]
