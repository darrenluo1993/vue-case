<script>
import gsap from 'gsap'

const list = [
  { msg: 'Bruce Lee' },
  { msg: 'Jackie Chan' },
  { msg: 'Chuck Norris' },
  { msg: 'Jet Li' },
  { msg: 'Kung Fury' },
  { msg: 'Darren Luo' },
]

export default {
  data() {
    return {
      query: null,
    }
  },
  computed: {
    computedList() {
      if (!this.query) {
        return list
      }
      return list.filter((item) => item.msg.toLowerCase().includes(this.query.toLowerCase()))
    },
  },
  methods: {
    onBeforeEnter(el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    onEnter(el, done) {
      gsap.to(el, {
        opacity: 1,
        height: '1.6em',
        delay: el.dataset.index * 0.15,
        onComplete: done,
      })
    },
    onLeave(el, done) {
      gsap.to(el, {
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.15,
        onComplete: done,
      })
    },
  },
}
</script>

<template>
  <div>
    <input v-model="query" />
    <TransitionGroup
      tag="ul"
      :css="false"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
    >
      <li v-for="(item, index) in computedList" :key="item.msg" :data-index="index">
        {{ item.msg }}
      </li>
    </TransitionGroup>
  </div>
</template>

<style scoped>
input {
  width: 100%;
  height: 30px;
  line-height: 30px;
  margin: 0 0 10px 23px;
}
</style>
