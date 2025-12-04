<script>
export default {
  name: 'VModel1',
  props: ['modelValue'],
  emits: ['update:modelValue'],
}
</script>

<template>
  VModel1 input: <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template>

<style scoped></style>
