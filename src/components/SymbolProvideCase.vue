<script>
import { userinfo } from '@/components/js/keys.js'
import SymbolInjectCase from '@/components/SymbolInjectCase.vue'

export default {
  name: 'SymbolProvideCase',
  components: { SymbolInjectCase },
  provide: {
    [userinfo]: {
      username: 'Jerry',
      password: '<PASSWORD>',
      email: 'jerry@example.com',
      sex: 'male',
      age: 18,
      height: 180,
      weight: 80,
      occupation: 'programmer',
      education: 'bachelor',
      country: 'China',
    },
  },
}
</script>

<template>
  <div>
    <SymbolInjectCase />
  </div>
</template>

<style scoped></style>
