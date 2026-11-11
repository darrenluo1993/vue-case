export default [
  {
    path: "/home",
    name: "goto-home",
    redirect: { name: "home" },
  },
  {
    path: "/main",
    name: "goto-main",
    redirect: "/main-page",
  },
  {
    path: "/userinfo/:username",
    name: "userinfo",
    redirect: (from) => {
      return { path: `/User/${from.params.username}` }
    },
  },
  {
    path: "/userinfo1/:username",
    name: "userinfo1",
    redirect: (from) => {
      return { name: "User", params: { username: from.params.username } }
    },
  },
]
