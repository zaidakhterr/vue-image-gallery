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
    axios.get("https://picsum.photos/v2/list?page=1&limit=12").then(res => {
      this.images = res.data;
    });
  }
};
</script>

<style lang="scss" scoped>
.image-gallery {
  width: 100%;
  height: 200px;
  max-width: 1000px;
  margin: 0 auto 64px;
  padding: 16px 32px;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>
