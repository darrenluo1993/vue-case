<script>
export default {
  name: 'middle',
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
  <div class="middle-view">
    <h1>Middle View</h1>
    <p>ID: {{ id }}</p>
    <p>Name: {{ name }}</p>
    <p>Price: {{ price }}</p>
  </div>
</template>

<style scoped>
.middle-view {
  background-color: lightgreen;
  width: 60%;
  height: 100%;
  color: #222222;
  text-align: center;
}
</style>
