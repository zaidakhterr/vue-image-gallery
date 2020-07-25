<template>
  <div>
    <h1>{{ $route.params.title }}</h1>
    <img :src="$route.params.url" :alt="$route.params.title" />
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
