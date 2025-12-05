<script>
import NamedSlot from '@/components/NamedSlot.vue'
import ConditionSlot from '@/components/ConditionSlot.vue'
import DynamicSlot from '@/components/DynamicSlot.vue'
import ScopeDefaultSlot from '@/components/ScopeDefaultSlot.vue'
import ScopeNamedSlot from '@/components/ScopeNamedSlot.vue'
import ListScopeNamedSlot from '@/components/ListScopeNamedSlot.vue'

export default {
  name: 'SlotCase',
  components: {
    ListScopeNamedSlot,
    ScopeNamedSlot,
    ScopeDefaultSlot,
    DynamicSlot,
    ConditionSlot,
    NamedSlot,
  },
  data() {
    return {
      dynamicSlotName1: 'content1',
      dynamicSlotName2: 'content2',
      data: [
        {
          body: 'Blog content 1',
          username: 'Bob',
          likes: 10,
        },
        {
          body: 'Blog content 2',
          username: 'Alice',
          likes: 20,
        },
        {
          body: 'Blog content 3',
          username: 'Tony',
          likes: 30,
        },
      ],
    }
  },
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
    <hr />
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
    <hr />
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
    <hr />
    <DynamicSlot>
      <template v-slot:[dynamicSlotName1]>
        <p>This is the content1</p>
      </template>
    </DynamicSlot>
    <hr />
    <DynamicSlot>
      <template #[dynamicSlotName2]>
        <p>This is the content2</p>
      </template>
    </DynamicSlot>
    <hr />
    <ScopeDefaultSlot v-slot="slotProps">
      <p>ID is {{ slotProps.id }}</p>
      <p>Text is {{ slotProps.text }}</p>
    </ScopeDefaultSlot>
    <hr />
    <ScopeDefaultSlot v-slot="{ id, text }">
      <p>ID is {{ id }}</p>
      <p>Text is {{ text }}</p>
    </ScopeDefaultSlot>
    <hr />
    <ScopeNamedSlot>
      <template v-slot:header="sprops">
        <header>{{ sprops.title }}</header>
      </template>
      <template #content="{ content }">
        <main>{{ content }}</main>
      </template>
      <template #footer="{ footer }">
        <footer>{{ footer }}</footer>
      </template>
    </ScopeNamedSlot>
    <hr />
    <ListScopeNamedSlot :data="data">
      <template #item="{ body, username, likes }">
        <div class="item">
          <p>{{ body }}</p>
          <p>by {{ username }} | {{ likes }} likes</p>
        </div>
      </template>
    </ListScopeNamedSlot>
  </div>
</template>

<style scoped>
hr {
  margin: 10px 0;
  border: 1px solid red;
}
.item {
  color: blue;
  font-size: 16px;
}
</style>
