<template>
  <div>
    <h1>Image Gallery</h1>
    <image-gallery />
    <small>Look at all those beauiful images.</small>
  </div>
</template>

<script>
import ImageGallery from "../components/ImageGallery";

export default {
  name: "App",
  components: {
    ImageGallery
  }
};
</script>

<style lang="scss" scoped>
h1 {
  width: 100%;
  font-size: calc(2.2rem + 1vw);
  margin: 32px 0;
  text-align: center;
  text-transform: capitalize;
}

small {
  display: block;
  width: 100%;
  text-align: center;
  margin: 64px 0;
}
</style>
