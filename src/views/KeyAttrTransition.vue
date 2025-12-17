<script>
export default {
  name: 'KeyAttrTransition',
  data() {
    return {
      count: 1,
      interval: null,
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.count++
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
}
</script>

<template>
  <Transition name="trans" mode="out-in">
    <span :key="count">{{ count }}</span>
  </Transition>
</template>

<style>
span {
  color: red;
  font-size: 5rem;
}

/*Transition不命名时将会使用v-开头的class*/
.v-enter-active,
.v-leave-active {
  transition: all 0.25s;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}

.trans-enter-active,
.trans-leave-active {
  transition: all 0.25s;
}
.trans-enter-from,
.trans-leave-to {
  opacity: 0;
}

.trans-enter-to,
.trans-leave-from {
  opacity: 1;
}
</style>
