<script>
export default {
  name: 'LoadingComponent',
  data() {
    return {
      loading: true,
    }
  },
}
</script>

<template>
  <div>
    <h1>LoadingComponent</h1>
    <p v-if="loading">Loading...</p>
  </div>
</template>

<style scoped></style>
