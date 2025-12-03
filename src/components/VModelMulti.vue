<script>
export default {
  name: 'VModelMulti',
  props: {
    firstName: String,
    lastName: String,
  },
  emits: ['update:firstName', 'update:lastName'],
}
</script>

<template>
  <div>
    <div>First Name: <input :value="firstName" @input="$emit('update:firstName', $event.target.value)"></div>
    <div>Last Name: <input :value="lastName" @input="$emit('update:lastName', $event.target.value)"></div>
  </div>
</template>

<style scoped></style>
