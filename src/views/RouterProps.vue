<script>
export default {
  name: 'RouterProps.vue',
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <div>
    <h1>Router Props</h1>
    <p>ID: {{ id }}</p>
    <p>Name: {{ name }}</p>
    <p>Price: {{ price }}</p>
  </div>
</template>

<style scoped></style>
