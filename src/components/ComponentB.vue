<script>
export default {
  name: 'ComponentB',
  data() {
    return {
      msg: '',
    }
  },
  activated() {
    console.log('ComponentB activated')
  },
  deactivated() {
    console.log('ComponentB deactivated')
  },
}
</script>

<template>
  <p>Current component: B</p>
  <span>Message is: {{ msg }}</span>
  <input v-model="msg" />
</template>
