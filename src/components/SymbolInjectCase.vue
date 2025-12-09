<script>
import { userinfo } from '@/components/js/keys.js'

export default {
  name: 'SymbolInjectCase',
  inject: {
    userinfo: {
      from: userinfo,
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<template>
  <div>
    <h1>SymbolInjectCase</h1>
    <p>username: {{ userinfo.username }}</p>
    <p>password: {{ userinfo.password }}</p>
    <p>age: {{ userinfo.age }}</p>
    <p>userinfo: {{ userinfo }}</p>
  </div>
</template>

<style scoped></style>
