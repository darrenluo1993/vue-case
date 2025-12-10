<script>
import { defineAsyncComponent } from 'vue'
import ClassStyleBinding from '@/views/ClassStyleBinding.vue'

export default {
  name: 'AsyncComponent',
  components: {
    ClassStyleBinding,
    ListRendering: defineAsyncComponent(() => import('./ListRendering.vue')),
  },
}
</script>

<template>
  <ClassStyleBinding />
  <ListRendering />
</template>

<style scoped></style>
