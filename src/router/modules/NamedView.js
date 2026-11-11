import MainPage from "@/views/NamedView/main-page.vue"
import Left from "@/views/NamedView/left.vue"
import Middle from "@/views/NamedView/middle.vue"
import Right from "@/views/NamedView/right.vue"

export default [
  {
    path: "/main-page",
    name: "main-page",
    component: MainPage,
    children: [
      {
        path: "",
        components: {
          left: Left,
          middle: Middle,
          right: Right,
        },
      },
    ],
  },
]
