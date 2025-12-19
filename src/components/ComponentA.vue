<script>
export default {
  name: 'ComponentA',
  data() {
    return {
      count: 0,
    }
  },
  activated() {
    console.log('ComponentA activated')
  },
  deactivated() {
    console.log('ComponentA deactivated')
  },
}
</script>

<template>
  <p>Current component: A</p>
  <span>count: {{ count }}</span>
  <button @click="count++">+</button>
</template>
