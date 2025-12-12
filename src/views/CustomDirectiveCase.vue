<script>
// const focus = {
//   mounted: (el) => el.focus(),
// }
const highlight = {
  mounted: (el, binding) => (el.style.backgroundColor = binding.value),
}
const style = {
  mounted: (el, binding) => (el.style[binding.arg] = binding.value),
}

export default {
  name: 'CustomDirectiveCase',
  directives: {
    // focus,
    highlight,
    style,
  },
}
</script>

<template>
  <div>
    <label v-highlight="'yellow'" for="name">姓名：</label><input id="name" size="50" />
    <br />
    <label v-style:color="'red'" for="gender">性别：</label><input id="gender" v-focus size="50" />
  </div>
</template>

<style scoped></style>
