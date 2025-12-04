<script>
export default {
  name: 'VModel2',
  props: ['modelValue'],
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      },
    },
  },
}
</script>

<template>
  VModel2 input: <input v-model="value" />
</template>

<style scoped></style>
