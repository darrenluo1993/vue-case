<script>
export default {
  name: 'ScopeNamedSlot',
  data() {
    return {
      title: 'This is title',
      content: 'This is content',
      footer: 'This is footer',
    }
  },
}
</script>

<template>
  <div class="div-class">
    <slot name="header" :title="title" />
    <slot name="content" :content="content" />
    <slot name="footer" :footer="footer" />
  </div>
</template>

<style scoped>
.div-class {
  font-size: 16px;
  color: brown;
}
</style>
