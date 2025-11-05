<template>
  <div class="container">
    <h1>Computed Properties Example</h1>
    <p>Original Message: {{ message1 }}</p>
    <p>Reversed Message: {{ reversedMessage }}</p>
    <el-button type="success" @click="message1 = 'Hello, Vue 3!'">Change Message</el-button>

    <p>Writable Computed Property: {{ writableMessage }}</p>
    <el-input
      v-model="writableMessage"
      placeholder="Type to change writable computed property"
    ></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message1: 'Hello, Vue.js!',
      message2: 'Writable Computed Property',
    }
  },
  computed: {
    reversedMessage() {
      return this.message1.split('').reverse().join('')
    },
    writableMessage: {
      get() {
        return this.message2
      },
      set(newValue) {
        this.message2 = newValue
      },
    },
  },
}
</script>

<style scoped>
div.container {
  text-align: center;
  margin-top: 50px;
}
h1 {
  color: #42b983;
}
p {
  font-size: 20px;
}
.el-input {
  margin-top: 10px;
}
.el-button--success {
  margin: 10px 0;
}
</style>
