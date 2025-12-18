<script>
import ComponentA from '@/components/ComponentA.vue'
import ComponentB from '@/components/ComponentB.vue'

export default {
  name: 'DynamicComponent',
  components: { ComponentA, ComponentB },
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
    <!-- 非活跃的组件将会被缓存！ -->
    <KeepAlive>
      <component :is="current" />
    </KeepAlive>
  </div>
</template>
