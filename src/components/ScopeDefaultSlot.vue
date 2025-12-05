<script>
export default {
  name: 'ScopeDefaultSlot',
  data() {
    return {
      id: '123456',
      text: '一二三四五六',
    }
  },
}
</script>

<template>
  <div class="div-class">
    <slot :id="id" :text="text" />
  </div>
</template>

<style scoped>
.div-class {
  font-size: 20px;
  color: purple;
}
</style>
