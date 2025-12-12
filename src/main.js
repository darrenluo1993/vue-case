import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
// 应用层Provide
app.provide('hello', 'Hello VueJS!')

// 将自定义指令全局注册到应用层级
app.directive('focus', {
  mounted: (el) => el.focus(),
})

app.mount('#app')
