import RouterProps from "@/views/RouterProps.vue"
import RouterProps1 from "@/views/RouterProps1.vue"

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
    path: "/RouterProps1/:id/:name/:price",
    name: "RouterProps1",
    props: true, // 当 props 设置为 true 时，route.params 将被设置为组件的 props。
    component: RouterProps1,
  },
  {
    path: "/RouterProps2",
    name: "RouterProps2",
    props: {
      id: 100010,
      name: "VueJS",
      price: "100.00",
    },
    component: RouterProps,
  },
  {
    path: "/RouterProps3",
    name: "RouterProps3",
    props: (route) => ({
      id: route.query.id,
      name: route.query.name,
      price: route.query.price,
    }),
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
