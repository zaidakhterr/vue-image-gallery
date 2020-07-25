<template>
  <div>
    <img v-bind:src="image.url" v-bind:alt="image.title" />
  </div>
</template>

<script>
export default {
  name: "Image",
  props: {
    image: { type: Object, required: true }
  }
};
</script>

<style lang="scss" scoped></style>
