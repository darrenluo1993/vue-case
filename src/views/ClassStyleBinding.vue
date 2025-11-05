<template>
  <div class="container">
    <h1>Class Style Binding Example</h1>
    <p :class="{ active: isActive, 'text-danger': hasError }">
      This paragraph's class changes based on component data.
    </p>
    <el-button type="primary" @click="isActive = !isActive"> Toggle Active </el-button>
    <el-button type="danger" @click="hasError = !hasError"> Toggle Error </el-button>

    <p :class="classObject">This paragraph's class is bound to a class object.</p>
    <el-button type="primary" @click="classObject.active = !classObject.active">
      Toggle Object Active
    </el-button>
    <el-button type="danger" @click="classObject['text-danger'] = !classObject['text-danger']">
      Toggle Object Error
    </el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: false,
      classObject: {
        active: true,
        'text-danger': false,
      },
    }
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
.active {
  color: green;
  font-weight: bold;
}
.text-danger {
  color: red;
}
.el-button {
  margin: 10px;
}
</style>
