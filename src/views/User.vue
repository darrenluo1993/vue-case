<script>
export default {
  name: 'User',
  created() {
    this.$watch(
      () => this.$route.params.username,
      (newUsername, oldUsername) => {
        console.log('Username: route.params.username changed from', oldUsername, 'to', newUsername)
      },
    )
  },
}
</script>

<template>
  <div>Username: {{ $route.params.username }}</div>
</template>

<style scoped></style>
