<script>
export default {
  name: 'NamedViewRouterProps',
}
</script>

<template>
  <div class="page-container">
    <router-view name="left" />
    <router-view name="middle" />
    <router-view name="right" />
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.page-container > div[class$='-view'] {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
