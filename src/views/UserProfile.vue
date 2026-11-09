<script>
export default {
  name: 'UserProfile',
}
</script>

<template>
  <div>
    <h1>User Profile</h1>
    <div>{{ $route.params.gender }}</div>
  </div>
</template>

<style scoped></style>
