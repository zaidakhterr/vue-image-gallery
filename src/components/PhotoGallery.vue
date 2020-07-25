<template>
  <div class="image-gallery">
    <photo-box
      v-for="photo in photos"
      v-bind:key="photo.id"
      v-bind:photo="photo"
    />
  </div>
</template>

<script>
import axios from "axios";
import PhotoBox from "./PhotoBox";

export default {
  name: "PhotoGallery",
  components: {
    PhotoBox
  },
  data() {
    return {
      photos: []
    };
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=112")
      .then(res => {
        console.log(res);
        this.photos = res.data;
      });
  }
};
</script>

<style lang="scss" scoped>
.image-gallery {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto 64px;
  padding: 16px 32px 64px;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
</style>
