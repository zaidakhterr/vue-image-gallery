<template>
  <div class="image-box">
    <img v-bind:src="image.download_url" v-bind:alt="image.author" />
    <div>{{ image.author }}</div>
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
  position: relative;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    text-align: center;
    background-color: rgba(#000, 0.5);
    padding: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all 250ms;
  }

  &:hover {
    div {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
