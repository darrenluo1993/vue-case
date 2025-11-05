<template>
  <div>
    <h1>条件渲染示例</h1>
    <p v-if="isVisible === 0">这里是条件渲染组件的内容。</p>
    <p v-else-if="isVisible === 1">内容不可见。</p>
    <p v-else>内容已隐藏。</p>
    <el-button type="primary" @click="isVisible = isVisible === 0 ? 1 : isVisible === 1 ? 2 : 0">
      切换内容显示
    </el-button>

    <template v-if="templateVisible">
      <p>这是使用 &lt;template&gt; 标签包裹的条件渲染内容。</p>
    </template>
    <el-button type="success" @click="templateVisible = !templateVisible">
      切换模板内容显示
    </el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: 0,
      templateVisible: true,
    }
  },
}
</script>

<style scoped>
div {
  text-align: center;
  margin-top: 50px;
}
h1 {
  color: #42b983;
}
p {
  font-size: 20px;
}
.el-button {
  margin-top: 10px;
}
</style>
