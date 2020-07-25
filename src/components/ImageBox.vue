<template>
  <router-link
    :to="{
      name: 'Photo',
      params: { id: image.id, title: image.title, url: image.url }
    }"
  >
    <div class="image-box">
      <img v-bind:src="image.thumbnailUrl" v-bind:alt="image.title" />
      <div>{{ image.title }}</div>
    </div>
  </router-link>
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
a {
  color: #fff;
}
.image-box {
  cursor: pointer;
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
