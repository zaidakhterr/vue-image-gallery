<template>
  <div class="image-gallery">
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
      .get("https://jsonplaceholder.typicode.com/photos?_limit=112")
      .then(res => {
        console.log(res);
        this.images = res.data;
      });
  }
};
</script>

<style lang="scss" scoped>
.image-gallery {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto 64px;
  padding: 16px 32px 128px;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>
