<template>
  <div>
    <image-box v-for="img in images" v-bind:key="img.id" v-bind:image="img" />
  </div>
</template>

<script>
import axios from "axios";
import ImageBox from "./ImageBox";

export default {
  name: "ImageGallery",
  components: {
    ImageBox
  },
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
