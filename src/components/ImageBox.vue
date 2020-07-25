<template>
  <div class="image-box">
    <img v-bind:src="image.url" v-bind:alt="image.title" />
  </div>
</template>

<script>
export default {
  name: "ImageBox",
  props: {
    image: { type: Object, required: true }
  }
};
</script>

<style lang="scss" scoped>
.image-box {
  width: 100%;

  img {
    width: 100%;
  }
}
</style>
