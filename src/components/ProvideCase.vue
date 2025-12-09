<script>
import { computed } from 'vue'
import InjectCase from '@/components/InjectCase.vue'

export default {
  name: 'ProvideCase',
  components: { InjectCase },
  data() {
    return {
      username2: 'Jerry2',
      username3: 'Jerry3',
    }
  },
  provide() {
    return {
      username1: 'Jerry1',
      // 请注意这不会使注入保持响应性。
      username2: this.username2,
      // 创建一个计算属性，使其保持响应性。
      username3: computed(() => this.username3),
    }
  },
}
</script>

<template>
  <div>
    <h1>ProvideCase</h1>
    <div>用户名1：Jerry1</div>
    <div>用户名2：<input type="text" v-model="username2" /></div>
    <div>用户名3：<input type="text" v-model="username3" /></div>
    <hr />
    <InjectCase />
  </div>
</template>

<style scoped></style>
