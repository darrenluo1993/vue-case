<script setup>
import { RouterLink, RouterView } from "vue-router"
import HelloWorld from "./components/HelloWorld.vue"
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/" active-class="active-class" exact-active-class="exact-active-class">Home</RouterLink>
        <RouterLink to="/about" activeClass="active-class" exactActiveClass="exact-active-class">About</RouterLink>
        <RouterLink to="/elementUICase" active-class="active-class" exact-active-class="exact-active-class">Element UI Case</RouterLink>
        <RouterLink to="/computedProps" activeClass="active-class" exactActiveClass="exact-active-class">Computed Props</RouterLink>
        <RouterLink to="/classStyleBinding">Class Style Binding</RouterLink>
        <RouterLink to="/conditionalRendering">Conditional Rendering</RouterLink>
        <RouterLink to="/listRendering">List Rendering</RouterLink>
        <RouterLink to="/VModelCase">VModel Case</RouterLink>
        <RouterLink to="/TransmitAttrs">Transmit Attrs</RouterLink>
        <RouterLink to="/SlotCase">Slot Case</RouterLink>
        <RouterLink to="/ProvideInjectCase">Provide Inject Case</RouterLink>
        <RouterLink to="/AsyncComponent">Async Component</RouterLink>
        <RouterLink to="/AsyncComponent1">Async Component1</RouterLink>
        <RouterLink to="/CompositionAPICase">Composition API Case</RouterLink>
        <RouterLink to="/CustomDirectiveCase">Custom Directive Case</RouterLink>
        <RouterLink to="/KeyAttrTransition">Key Attr Transition</RouterLink>
        <RouterLink to="/TransitionGroupCase">Transition Group Case</RouterLink>
        <RouterLink to="/DynamicComponent">Dynamic Component</RouterLink>
        <RouterLink to="/TeleportCase">Teleport Case</RouterLink>
        <RouterLink to="/User/Darren Luo">DynamicRouterWithParams Case 1</RouterLink>
        <RouterLink to="/User/Zhang%20San">DynamicRouterWithParams Case 2</RouterLink>
        <RouterLink to="/BookInfo/id/159465/name/C语言编程入门?price=78.00">DynamicRouterWithParams Case 3</RouterLink>
        <RouterLink to="/Chapter/one1/two2/three3">DynamicRouterWithParams Case 4</RouterLink>
        <RouterLink to="/User/lisi/posts/159753">NestedRouterWithParams Case 1</RouterLink>
        <RouterLink to="/User/lisi/profile/male">NestedRouterWithParams Case 2</RouterLink>
        <RouterLink to="/main-page">NamedView Case 1</RouterLink>
        <RouterLink to="/home">RouterRedirect Case 1</RouterLink>
        <RouterLink to="/main">RouterRedirect Case 2</RouterLink>
        <RouterLink to="/userinfo/Wang Wu">RouterRedirect Case 3</RouterLink>
        <RouterLink to="/userinfo1/Zhao Liu">RouterRedirect Case 4</RouterLink>
        <RouterLink to="/book/id/159465/name/C语言编程入门?price=78.00">RouterAlias Case 1</RouterLink>
        <RouterLink to="/user/1000/profile/female">RouterAlias Case 2</RouterLink>
        <RouterLink to="/1000/male">RouterAlias Case 3</RouterLink>
        <RouterLink to="/user/1000/female">RouterAlias Case 4</RouterLink>
      </nav>

      <el-menu :default-active="$route.path" router>
        <el-sub-menu index="1">
          <template #title>
            <span>Vue Case</span>
          </template>
          <el-menu-item index="/">
            <span>Home</span>
          </el-menu-item>
          <el-menu-item index="/about">
            <span>About</span>
          </el-menu-item>
          <el-menu-item index="/elementUICase">
            <span>Element UI Case</span>
          </el-menu-item>
          <el-menu-item index="/computedProps">
            <span>Computed Props</span>
          </el-menu-item>
          <el-menu-item index="/classStyleBinding">
            <span>Class Style Binding</span>
          </el-menu-item>
          <el-menu-item index="/conditionalRendering">
            <span>Conditional Rendering</span>
          </el-menu-item>
          <el-menu-item index="/listRendering">
            <span>List Rendering</span>
          </el-menu-item>
          <el-menu-item index="/VModelCase">
            <span>VModel Case</span>
          </el-menu-item>
          <el-menu-item index="/TransmitAttrs">
            <span>Transmit Attrs</span>
          </el-menu-item>
          <el-menu-item index="/SlotCase">
            <span>Slot Case</span>
          </el-menu-item>
          <el-menu-item index="/ProvideInjectCase">
            <span>Provide Inject Case</span>
          </el-menu-item>
          <el-menu-item index="/AsyncComponent">
            <span>Async Component</span>
          </el-menu-item>
          <el-menu-item index="/AsyncComponent1">
            <span>Async Component1</span>
          </el-menu-item>
          <el-menu-item index="/CompositionAPICase">
            <span>Composition API Case</span>
          </el-menu-item>
          <el-menu-item index="/CustomDirectiveCase">
            <span>Custom Directive Case</span>
          </el-menu-item>
          <el-menu-item index="/KeyAttrTransition">
            <span>Key Attr Transition</span>
          </el-menu-item>
          <el-menu-item index="/TransitionGroupCase">
            <span>Transition Group Case</span>
          </el-menu-item>
          <el-menu-item index="/DynamicComponent">
            <span>Dynamic Component</span>
          </el-menu-item>
          <el-menu-item index="/TeleportCase">
            <span>Teleport Case</span>
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <span>Vue Router Case</span>
          </template>
          <el-menu-item index="/User/Darren Luo">
            <span>DynamicRouterWithParams Case 1</span>
          </el-menu-item>
          <el-menu-item index="/User/Zhang%20San">
            <span>DynamicRouterWithParams Case 2</span>
          </el-menu-item>
          <el-menu-item index="/BookInfo/id/159465/name/C语言编程入门?price=78.00">
            <span>DynamicRouterWithParams Case 3</span>
          </el-menu-item>
          <el-menu-item index="/Chapter/one1/two2/three3">
            <span>DynamicRouterWithParams Case 4</span>
          </el-menu-item>
          <el-menu-item index="/User/lisi/posts/159753">
            <span>NestedRouterWithParams Case 1</span>
          </el-menu-item>
          <el-menu-item index="/User/lisi/profile/male">
            <span>NestedRouterWithParams Case 2</span>
          </el-menu-item>
          <el-menu-item index="/main-page">
            <span>NamedView Case 1</span>
          </el-menu-item>
          <el-menu-item index="/home">
            <span>RouterRedirect Case 1</span>
          </el-menu-item>
          <el-menu-item index="/main">
            <span>RouterRedirect Case 2</span>
          </el-menu-item>
          <el-menu-item index="/userinfo/Wang Wu">
            <span>RouterRedirect Case 3</span>
          </el-menu-item>
          <el-menu-item index="/userinfo1/Zhao Liu">
            <span>RouterRedirect Case 4</span>
          </el-menu-item>
          <el-menu-item index="/book/id/159465/name/C语言编程入门?price=78.00">
            <span>RouterAlias Case 1</span>
          </el-menu-item>
          <el-menu-item index="/user/1000/profile/female">
            <span>RouterAlias Case 2</span>
          </el-menu-item>
          <el-menu-item index="/1000/male">
            <span>RouterAlias Case 3</span>
          </el-menu-item>
          <el-menu-item index="/user/1000/female">
            <span>RouterAlias Case 4</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.el-menu {
  width: 100%;
  max-height: 60vh;
  overflow: auto;
}

:deep(.el-sub-menu__title) {
  border-radius: 5px;
}

.el-menu-item {
  border-radius: 5px;
}

.el-menu-item.is-active {
  color: var(--el-color-white);
  border-radius: 5px;
  background-color: var(--el-menu-active-color);
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  max-height: 30vh;
  overflow: auto;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

/*nav a:first-of-type {
  border: 0;
}*/

nav a:nth-child(n + 5) {
  display: none;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    /*margin-left: -1rem;*/
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
