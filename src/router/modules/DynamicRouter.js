import User from "@/views/User.vue"
import UserPosts from "@/views/UserPosts.vue"
import UserProfile from "@/views/UserProfile.vue"
import BookInfo from "@/views/BookInfo.vue"
import Chapter from "@/views/Chapter.vue"

export default [
  {
    path: "/User/:username",
    name: "User",
    component: User,
    children: [
      {
        path: "posts/:postId",
        name: "UserPosts",
        component: UserPosts,
      },
      {
        path: "profile/:gender",
        name: "UserProfile",
        component: UserProfile,
      },
    ],
  },
  {
    path: "/BookInfo/id/:id/name/:name",
    name: "BookInfo",
    alias: "/book/id/:id/name/:name",
    component: BookInfo,
  },
  {
    path: "/Chapter/:chapters([0-9a-zA-Z]+)+",
    name: "Chapter",
    strict: true, // 不允许尾部斜线
    sensitive: true, // 默认情况下，所有路由是不区分大小写的，并且能匹配带有或不带有尾部斜线的路由。例如，路由 /users 将匹配 /users、/users/、甚至 /Users/。这种行为可以通过 strict 和 sensitive 选项来修改，它们既可以应用在整个全局路由上，又可以应用于当前路由上。
    component: Chapter,
  },
]
