<script>
import { defineAsyncComponent, hydrateOnInteraction } from 'vue'
import LoadingComponent from '../components/LoadingComponent.vue'
import ErrorComponent from '../components/ErrorComponent.vue'

export default {
  name: 'AsyncComponent1',
  components: {
    ConditionalRendering: defineAsyncComponent({
      // 加载函数
      loader: () => import('./ConditionalRendering.vue'),
      // 加载异步组件时使用的组件
      loadingComponent: LoadingComponent,
      // 展示加载组件前的延迟时间，默认为 200ms——这是因为在网络状况较好时，加载完成得很快，加载组件和最终组件之间的替换太快可能产生闪烁，反而影响用户感受。
      delay: 0,
      // 加载失败后展示的组件
      errorComponent: ErrorComponent,
      // 如果提供了一个 timeout 时间限制，并超时了
      // 也会显示这里配置的报错组件，默认值是：Infinity
      timeout: 50,
      // 在空闲时进行激活。
      // hydrate: hydrateOnIdle((/* 传递可选的最大超时 */),
      // 在元素变为可见时进行激活。
      // hydrate: hydrateOnVisible({ rootMargin: '100px' }),
      // 当指定的媒体查询匹配时进行激活。
      // hydrate: hydrateOnMediaQuery('(max-width:500px)'),
      // 当组件元素上触发指定事件时进行激活。完成激活后，触发激活的事件也将被重放。
      // hydrate: hydrateOnInteraction('click'),
      // 也可以是多个事件类型的列表：
      hydrate: hydrateOnInteraction(['wheel', 'mouseover']),
    }),
  },
}
</script>

<template>
  <ConditionalRendering />
</template>

<style scoped></style>
