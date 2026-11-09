<script>
export default {
  name: 'User',
  data() {
    let username = this.$route.params.username
    return {
      username: username,
      toPosts: `/User/${username}/posts/4567532`,
      toProfile: `/User/${username}/profile/female2`,
    }
  },
  created() {
    this.$watch(
      () => this.$route.params.username,
      (newUsername, oldUsername) => {
        if (newUsername) {
          this.username = newUsername
          this.toPosts = `/User/${newUsername}/posts/4567532`
          this.toProfile = `/User/${newUsername}/profile/female2`
        }
        console.log('Username: route.params.username changed from', oldUsername, 'to', newUsername)
      },
    )
  },
  methods: {
    toPost3() {
      this.$router.push({
        path: `/User/${this.username}/posts/4567533`,
      })
    },
    toProfile3() {
      this.$router.push({
        path: `/User/${this.username}/profile/female3`,
      })
    },
  },
}
</script>

<template>
  <div>
    <h1>Username: {{ username }}</h1>
    <router-link :to="`/User/${username}/posts/4567531`">to Posts1</router-link>
    <router-link :to="toPosts">to Posts2</router-link>
    <a href="javascript:void(0)" @click="toPost3">to Posts3</a>
    <router-link :to="`/User/${username}/profile/female1`">to Profile1</router-link>
    <router-link :to="toProfile">to Profile2</router-link>
    <a href="javascript:void(0)" @click="toProfile3">to Profile3</a>
    <router-view />
  </div>
</template>

<style scoped></style>
