<script>
export default {
  name: 'InjectCase',
  inject: {
    username1: {
      type: String,
      default: 'username1',
    },
    username2: {
      type: String,
      default: 'username2',
    },
    username3: {
      type: String,
      default: 'username3',
    },
  },
}
</script>

<template>
  <div>
    <h1>InjectCase</h1>
    <div>用户名1：{{ username1 }}</div>
    <div>用户名2：{{ username2 }}</div>
    <div>用户名3：{{ username3 }}</div>
  </div>
</template>

<style scoped></style>
