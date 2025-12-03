<script>
import VModelMulti from '@/components/VModelMulti.vue'

export default {
  name: 'VModelCase',
  components: {
    VModelMulti,
  },
  data() {
    return {
      firstName: 'Default',
      lastName: 'Default',
    }
  }
}
</script>

<template>
  <div>
    Full Name: {{ firstName }} {{ lastName }}
    <VModelMulti v-model:first-name="firstName" v-model:last-name="lastName"/>
  </div>
</template>

<style scoped></style>
