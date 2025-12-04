<script>
export default {
  name: 'VModel3',
  props: ['title'],
  emits: ['update:title'],
}
</script>

<template>
  VModel3 input: <input :value="title" @input="$emit('update:title', $event.target.value)" />
</template>

<style scoped></style>
