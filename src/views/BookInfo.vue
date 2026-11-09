<script>
export default {
  name: 'BookInfo',
}
</script>

<template>
  <div>
    <h1>BookInfo</h1>
    <div>$route: {{ $route }}</div>
    <span>
      BookInfo, ID: {{ $route.params.id }}, Name: {{ $route.params.name }}, Price: ￥{{
        $route.query.price
      }}
    </span>
  </div>
</template>

<style scoped>
div {
  font-weight: bold;
}

span:last-child {
  display: block;
  color: #42b983;
  font-weight: bold;
}
</style>
