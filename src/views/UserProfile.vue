<script>
export default {
  name: 'UserProfile',
}
</script>

<template>
  <div>
    <h1>User Profile</h1>
    <div v-if="$route.params.id">id: {{ $route.params.id }}</div>
    <div v-if="$route.params.gender">gender: {{ $route.params.gender }}</div>
  </div>
</template>

<style scoped></style>
