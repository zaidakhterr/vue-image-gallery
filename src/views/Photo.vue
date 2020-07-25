<template>
  <div>
    <h2>{{ $route.query.title }}</h2>
    <img :src="$route.query.url" :alt="$route.query.title" />
  </div>
</template>

<script>
export default {
  name: "Photo"
};
</script>

<style lang="scss" scoped>
div {
  padding: 0 32px;
}
img {
  display: block;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
</style>
