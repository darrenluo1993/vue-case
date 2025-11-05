<template>
  <div class="container">
    <h1>List Rendering Example</h1>
    <ul>
      <li v-for="({ id, name, quantity }, index) in items" :key="id">
        idx{{ index }} : {{ id }} - {{ name }} - {{ quantity }}
      </li>
    </ul>
    <el-button type="primary" @click="addItem">Add Item</el-button>
    <h1>Object Iteration</h1>
    <ul>
      <li v-for="(value, key, index) in myObject" :key="key">
        {{ index }} : {{ key }} : {{ value }}
      </li>
    </ul>
    <h1>Using &lt;template&gt; with v-for</h1>
    <ul>
      <template v-for="item in items" :key="item.id">
        <li>{{ item.name }}</li>
        <li>{{ item.quantity }}</li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Apple', quantity: 10 },
        { id: 2, name: 'Banana', quantity: 5 },
        { id: 3, name: 'Orange', quantity: 8 },
      ],
      nextId: 4,
      myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10',
      },
    }
  },
  methods: {
    addItem() {
      this.items.push({
        id: this.nextId++,
        name: `New Item ${this.nextId - 1}`,
        quantity: Math.floor(Math.random() * 10) + 1,
      })
    },
  },
}
</script>

<style>
div.container {
  text-align: center;
  margin-top: 50px;
}
h1 {
  color: #42b983;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  font-size: 20px;
  margin: 5px 0;
}
.el-button {
  margin-top: 10px;
}
</style>
