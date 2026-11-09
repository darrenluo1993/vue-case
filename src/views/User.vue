<script>
export default {
  name: 'User',
  data() {
    return {
      username: this.$route.params.username,
      toPosts: `/User/${this.username}/posts/4567532`,
      toProfile: `/User/${this.username}/profile/female2`,
    }
  },
  created() {
    this.$watch(
      () => this.$route.params.username,
      (newUsername, oldUsername) => {
        if (newUsername) {
          this.username = newUsername
        }
        console.log('Username: route.params.username changed from', oldUsername, 'to', newUsername)
      },
    )
  },
}
</script>

<template>
  <div>
    <h1>Username: {{ username }}</h1>
    <router-link to="/User/{{username}}/posts/4567531">to Posts1</router-link>
    <router-link :to="toPosts">to Posts2</router-link>
    <router-link to="/User/{{username}}/profile/female1">to Profile1</router-link>
    <router-link :to="toProfile">to Profile2</router-link>
    <router-view />
  </div>
</template>

<style scoped></style>
