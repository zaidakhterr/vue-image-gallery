<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

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
  width: 100%;
  font-size: calc(2.2rem + 1vw);
  margin: 32px 0;
  text-align: center;
  text-transform: capitalize;
}

#nav {
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-weight: bold;
    color: #756f7e;
    padding: 0px 8px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
