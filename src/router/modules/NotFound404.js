import NotFound404 from "@/views/NotFound404.vue"

export default {
  path: "/:pathMatch(.*)*",
  name: "NotFound404",
  component: NotFound404,
}
