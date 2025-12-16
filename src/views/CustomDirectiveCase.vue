<script>
// const focus = {
//   mounted: (el) => el.focus(),
// }
const highlight = {
  mounted: (el, binding) => (el.style.backgroundColor = binding.value),
}
const style = {
  mounted: (el, binding) => {
    let value = binding.value
    console.info(`value: ${value}`)
    let modifiers = binding.modifiers
    console.info(`modifiers: ${JSON.stringify(modifiers)}`)
    let arg = binding.arg
    console.info(`arg: ${arg}`)
    el.style = null
    if (!value && modifiers.default) {
      el.style[arg] = 'green'
    } else {
      el.style[arg] = value
    }
  },
  updated: (el, binding) => {
    let value = binding.value
    console.info(`value: ${value}`)
    let modifiers = binding.modifiers
    console.info(`modifiers: ${JSON.stringify(modifiers)}`)
    let arg = binding.arg
    console.info(`arg: ${arg}`)
    el.style = null
    if (!value && modifiers.default) {
      el.style[arg] = 'green'
    } else {
      el.style[arg] = value
    }
  },
}

const styleX = {
  mounted: (el, binding) => {
    let value = binding.value
    for (let key in value) {
      el.style[key] = value[key]
    }
  }
}

export default {
  name: 'CustomDirectiveCase',
  directives: {
    // focus,
    highlight,
    style,
    styleX,
  },
  data() {
    return {
      arg: 'color',
    }
  },
  created() {
    console.info(`arg: ${this.arg}`)
  },
  watch: {
    arg() {
      console.info(`arg: ${this.arg}`)
    },
  },
}
</script>

<template>
  <div>
    <input type="radio" id="color" v-model="arg" value="color" /><label for="color">颜色</label>
    <input type="radio" id="backgroundColor" v-model="arg" value="backgroundColor" /><label for="backgroundColor">背景色</label>
    <br />
    <label v-highlight="'yellow'" for="name">姓名：</label><input id="name" size="50" />
    <br />
    <label v-style:[arg].default="'red'" for="gender">性别：</label><input id="gender" v-focus size="50" />
    <br />
    <label v-style:[arg].default for="age">年龄：</label><input id="age" type="number" style="width: 337px" />
    <p v-style-x="{color: 'red', backgroundColor: 'yellow', fontSize: '20px'}">这是一段文本！！！</p>
  </div>
</template>

<style scoped></style>
