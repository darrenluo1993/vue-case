<script>
export default {
  name: 'GetAttributes',
  created() {
    console.info(this.$attrs)
  },
  computed: {
    attrs() {
      return JSON.stringify(this.$attrs)
    },
  },
}
</script>

<template>
  <div>
    attrs: {{ attrs }}<br />
    This is div, the attributes are {{ JSON.stringify($attrs) }}
  </div>
</template>

<style scoped></style>
