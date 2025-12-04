<script>
export default {
  name: 'VModelModifier',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    modelModifiers: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['update:modelValue'],
  created() {
    console.info(this.modelModifiers)
  },
  methods: {
    emitValue(e) {
      let value = e.target.value
      if (this.modelModifiers.capitalize) {
        let valueArr = value.split(' ')
        valueArr.forEach((word, index) => {
          valueArr[index] = word.charAt(0).toUpperCase() + word.slice(1)
        })
        value = valueArr.join(' ')
      }
      this.$emit('update:modelValue', value)
    },
  },
}
</script>

<template>
  VModelModifier input: <input type="text" :value="modelValue" @input="emitValue" />
</template>

<style scoped></style>
