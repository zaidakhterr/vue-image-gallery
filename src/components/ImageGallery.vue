<template>
  <div>
    <div v-for="image in images" v-bind:key="image.id">{{ image.title }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ImageGallery",
  data() {
    return {
      images: []
    };
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=16")
      .then(res => {
        this.images = res.data;
      });
  }
};
</script>

<style lang="scss" scoped></style>
