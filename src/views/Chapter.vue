<script>
export default {
  name: 'Chapter',
}
</script>

<template>
  <div>Chapter: {{ $route.params.chapters }}, Length: {{ $route.params.chapters.length }}</div>
</template>

<style scoped></style>
