<script>
export default {
  name: 'VModelModifierWithParam',
  props: {
    firstName: {
      type: String,
      default: '',
    },
    lastName: {
      type: String,
      default: '',
    },
    firstNameModifiers: {
      type: Object,
      default: () => ({}),
    },
    lastNameModifiers: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['update:firstName', 'update:lastName'],
  created() {
    console.log(this.firstNameModifiers)
    console.log(this.lastNameModifiers)
  },
  methods: {
    emitFirstName(e) {
      let firstName = e.target.value
      firstName = firstName.trim()
      if (this.firstNameModifiers.capitalize) {
        firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
      }
      this.$emit('update:firstName', firstName)
    },
    emitLastName(e) {
      let lastName = e.target.value
      lastName = lastName.trim()
      if (this.lastNameModifiers.capitalize) {
        lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1)
      }
      this.$emit('update:lastName', lastName)
    },
  },
}
</script>

<template>
  <div>
    First Name: <input :value="firstName" @input="emitFirstName" />
    Last Name: <input :value="lastName" @input="emitLastName" />
  </div>
</template>

<style scoped></style>
