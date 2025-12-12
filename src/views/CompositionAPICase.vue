<script setup>
import { useFetch } from '@/components/js/fetch.js'
import { useMouse } from '@/components/js/mouse.ext.js'
import { computed, onActivated, onMounted, onUnmounted, reactive, ref } from 'vue'

const count1 = ref(0)

const count2 = ref(0)
function increment() {
  count2.value++
}

const raw = { count3: 0 }
const state = reactive(raw)

const x = ref(0)
const y = ref(0)

function update(event) {
  x.value = event.pageX
  y.value = event.pageY
}

onMounted(() => {
  window.addEventListener('mousemove', update)
})
onUnmounted(() => {
  window.removeEventListener('mousemove', update)
})

const { x: x1, y: y1 } = useMouse()

const id = ref(1)
const baseURL = ref('https://jsonplaceholder.typicode.com/todos/')
const url = computed(() => baseURL.value + id.value)
const { data, error } = useFetch(url)

onActivated(() => {
  console.log('activated')
})
</script>

<template>
  <div>
    <button @click="count1++">count1 is: {{ count1 }}</button>
    <button @click="increment">count2 is: {{ count2 }}</button>
    <button @click="state.count3++">count3 is: {{ state.count3 }}</button>
    <hr />
    <p>const raw = { count3: 0 }</p>
    <p>const state = reactive(raw)</p>
    <hr />
    <p class="explain">reactive() 返回的是一个原始对象的 Proxy，它和原始对象是不相等的：</p>
    <p>
      raw === state: <i class="explain">{{ raw === state }}</i>
    </p>
    <hr />
    <p class="explain">
      为保证访问代理的一致性，对同一个原始对象调用 reactive() 会总是返回同样的代理对象：
    </p>
    <p>
      state === reactive(raw): <i class="explain">{{ state === reactive(raw) }}</i>
    </p>
    <hr />
    <p class="explain">而对一个已存在的代理对象调用 reactive() 会返回其本身：</p>
    <p>
      state === reactive(state): <i class="explain">{{ state === reactive(state) }}</i>
    </p>
    <hr />
    <p class="explain">Mouse position is at: {{ x }}, {{ y }}</p>
    <p class="explain">Mouse position is at: {{ x1 }}, {{ y1 }}</p>
    <hr />
    <p>请输入ID：<input v-model="id" placeholder="请输入ID" /></p>
    <p>请输入BaseURL：<input v-model="baseURL" placeholder="请输入BaseURL" size="40" /></p>
    <p>useFetch url: {{ url }}</p>
    <p>useFetch data: {{ data }}</p>
    <p>useFetch error: {{ error }}</p>
  </div>
</template>

<style scoped>
hr {
  margin: 10px 0;
}
.explain {
  color: red;
}
</style>
