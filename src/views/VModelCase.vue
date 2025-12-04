<script>
import VModel1 from '@/components/VModel1.vue'
import VModel2 from '@/components/VModel2.vue'
import VModel3 from '@/components/VModel3.vue'
import VModelMulti from '@/components/VModelMulti.vue'
import VModelModifier from '@/components/VModelModifier.vue'
import VModelModifierWithParam from '@/components/VModelModifierWithParam.vue'

export default {
  name: 'VModelCase',
  components: {
    VModel1,
    VModel2,
    VModel3,
    VModelMulti,
    VModelModifier,
    VModelModifierWithParam,
  },
  data() {
    return {
      inputValue1: null,
      inputValue2: null,
      inputValue3: null,
      firstName: '',
      lastName: '',
      inputValue4: null,
      firstName1: '',
      lastName1: '',
    }
  },
}
</script>

<template>
  <div>
    <div>VModel1 value: {{ inputValue1 }}</div>
    <VModel1 v-model="inputValue1" />
    <hr />
    <div>VModel2 value: {{ inputValue2 }}</div>
    <VModel2 v-model="inputValue2" />
    <hr />
    <div>VModel3 value: {{ inputValue3 }}</div>
    <VModel3 v-model:title="inputValue3" />
    <hr />
    <div>Full Name: {{ firstName }} {{ lastName }}</div>
    <VModelMulti v-model:first-name.trim="firstName" v-model:last-name.trim="lastName" />
    <hr />
    <div>VModelModifier value: {{ inputValue4 }}</div>
    <VModelModifier v-model.capitalize="inputValue4" />
    <hr />
    <div>Full Name: {{ firstName1 }} {{ lastName1 }}</div>
    <VModelModifierWithParam v-model:first-name.capitalize="firstName1" v-model:last-name.capitalize="lastName1" />
  </div>
</template>

<style scoped>
hr {
  margin: 5px 0;
}
</style>
