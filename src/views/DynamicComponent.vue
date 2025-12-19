<script>
import ComponentA from '@/components/ComponentA.vue'
import ComponentB from '@/components/ComponentB.vue'
import ComponentC from '@/components/ComponentC.vue'

export default {
  name: 'DynamicComponent',
  components: { ComponentA, ComponentB, ComponentC },
  data() {
    return {
      current: 'ComponentA',
    }
  },
}
</script>

<template>
  <div class="demo">
    <label><input type="radio" v-model="current" value="ComponentA" /> A</label>
    <label><input type="radio" v-model="current" value="ComponentB" /> B</label>
    <label><input type="radio" v-model="current" value="ComponentC" /> C</label>
    <!-- 使用KeepAlive时，非活跃的组件将会被缓存！ -->
    <KeepAlive :max="2">
      <component :is="current" />
    </KeepAlive>
    <hr />
    <!-- include、exclude这两个 prop 的值都可以是一个以英文逗号分隔的字符串、一个正则表达式，或是包含这两种类型的一个数组。 -->
    <!-- 以英文逗号分隔的字符串 -->
    <KeepAlive include="ComponentA,ComponentC" exclude="ComponentB">
      <component :is="current" />
    </KeepAlive>
    <hr />
    <!-- 正则表达式 (需使用 `v-bind`) -->
    <KeepAlive :include="/ComponentA|ComponentB/" :exclude="/ComponentC/">
      <component :is="current" />
    </KeepAlive>
    <hr />
    <!-- 数组 (需使用 `v-bind`) -->
    <KeepAlive :include="['ComponentB', 'ComponentC']" :exclude="['ComponentA']">
      <component :is="current" />
    </KeepAlive>
  </div>
</template>

<style scoped>
hr {
  margin: 10px 0;
}
</style>
