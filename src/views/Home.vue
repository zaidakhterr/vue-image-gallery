<template>
  <div>
    <h1>Image Gallery</h1>
    <photo-gallery />
    <small>Look at all those beauiful images.</small>
  </div>
</template>

<script>
import PhotoGallery from "../components/PhotoGallery";

export default {
  name: "App",
  components: {
    PhotoGallery
  }
};
</script>

<style lang="scss" scoped>
small {
  display: block;
  width: 100%;
  text-align: center;
  margin-bottom: 64px;
}
</style>
