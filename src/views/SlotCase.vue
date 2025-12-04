<script>
import NamedSlot from '@/components/NamedSlot.vue'

export default {
  name: 'SlotCase',
  components: { NamedSlot },
}
</script>

<template>
  <div>
    <NamedSlot>
      <template v-slot:header>
        <h1>Slot Case</h1>
      </template>
      <template v-slot:default>
        <p>This is a slot body</p>
      </template>
      <template #footer>
        <p>This is a slot footer</p>
      </template>
    </NamedSlot>
    <NamedSlot>
      <template #header>
        <h1>Slot Case</h1>
      </template>

      <!-- 隐式的默认插槽 -->
      <p>This is a slot body</p>

      <template #footer>
        <p>This is a slot footer</p>
      </template>
    </NamedSlot>
  </div>
</template>

<style scoped></style>
