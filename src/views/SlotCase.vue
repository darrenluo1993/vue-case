<script>
import NamedSlot from '@/components/NamedSlot.vue'
import ConditionSlot from '@/components/ConditionSlot.vue'
import DynamicSlot from '@/components/DynamicSlot.vue'

export default {
  name: 'SlotCase',
  components: { DynamicSlot, ConditionSlot, NamedSlot },
  data() {
    return {
      dynamicSlotName1: 'content1',
      dynamicSlotName2: 'content2',
    }
  }
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

    <ConditionSlot>
      <template #header>
        <h1>This is the header</h1>
      </template>

      <template #default>
        <p>This is the content</p>
      </template>

      <!--<template #footer>
        <em>This is the footer</em>
      </template>-->
    </ConditionSlot>

    <DynamicSlot>
      <template v-slot:[dynamicSlotName1]>
        <p>This is the content1</p>
      </template>
    </DynamicSlot>

    <DynamicSlot>
      <template #[dynamicSlotName2]>
        <p>This is the content2</p>
      </template>
    </DynamicSlot>
  </div>
</template>

<style scoped></style>
