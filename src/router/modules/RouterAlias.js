import UserProfile from "@/views/UserProfile.vue"

export default [
  {
    path: "/user/:id(\\d+)",
    name: "user",
    component: UserProfile,
    children: [
      // 为这 3 个 URL 呈现 UserProfile
      // - /user/1000/profile/male
      // - /1000/female
      // - /user/1000/male
      {
        path: "profile/:gender(male|female)",
        component: UserProfile,
        alias: ["/:id(\\d+)/:gender(male|female)", ":gender(male|female)"],
      },
    ],
  },
]
