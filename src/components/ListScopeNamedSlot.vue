<script>
export default {
  name: 'ListScopeNamedSlot',
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
}
</script>

<template>
  <ul>
    <li v-for="(item, index) in data" :key="index">
      <slot name="item" v-bind="item">
        <!--插槽默认内容-->
        <div class="item">
          <p>{{ item.body }}</p>
          <p>by {{ item.username }} | {{ item.likes }} likes</p>
        </div>
      </slot>
    </li>
  </ul>
</template>

<style scoped>
.item {
  color: blue;
  font-size: 16px;
}
</style>
