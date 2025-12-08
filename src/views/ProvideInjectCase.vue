<script>
export default {
  name: 'ProvideInjectCass',
  // 如果有多个父组件提供了相同键的数据，注入将解析为组件链上最近的父组件所注入的值。
  inject: {
    message: {
      from: 'hello',
      type: String,
      default: 'Hello World!',
    },
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('')
    },
  },
}
</script>

<template>
  <div>
    <b style="display: block">{{ message }}</b>
    <b style="display: block">{{ reversedMessage }}</b>
  </div>
</template>

<style scoped></style>
