<template>
  <div id="app">
    <h1>Image Gallery</h1>
    <image-gallery />
  </div>
</template>

<script>
import ImageGallery from "./components/ImageGallery";

export default {
  name: "App",
  components: {
    ImageGallery
  }
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto mono", monospace;
  border-radius: 0;
}

body {
  width: 100%;
  overflow-x: hidden;
  min-height: 100%;
  background: #28262b;
  color: #f1e8ff;
}

h1 {
  font-size: calc(2.2rem + 1vw);
  margin: 32px 0;
  text-align: center;
  text-transform: capitalize;
}
</style>
