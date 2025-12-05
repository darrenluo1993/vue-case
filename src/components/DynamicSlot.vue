<script>
export default {
  name: 'DynamicSlot',
}
</script>

<template>
  <div class="card">
    <div v-if="$slots.content1" class="card-content1">
      <slot name="content1" />
    </div>
    <div v-if="$slots.content2" class="card-content2">
      <slot name="content2" />
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 0;
  margin: 5px 0;
  border: 1px solid green;
}

.card-content1 {
  padding: 4px;
  font-size: 20px;
  font-weight: bold;
}

.card-content2 {
  color: red;
  padding: 4px;
  font-weight: bold;
}
</style>
