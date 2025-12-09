<script>
import ProvideCase from '@/components/ProvideCase.vue'
import SymbolProvideCase from '@/components/SymbolProvideCase.vue'

export default {
  name: 'ProvideInjectCase',
  components: { SymbolProvideCase, ProvideCase },
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
    <hr />
    <ProvideCase />
    <hr />
    <SymbolProvideCase />
  </div>
</template>

<style scoped></style>
