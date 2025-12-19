<script>
export default {
  name: 'ComponentC',
  data() {
    return {
      value: '',
    }
  },
  activated() {
    console.log('ComponentC activated')
  },
  deactivated() {
    console.log('ComponentC deactivated')
  },
}
</script>

<template>
  <p>Current component: C</p>
  <span>Selected value is: {{ value }}</span>
  <select v-model="value">
    <option value="">Select</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
</template>
