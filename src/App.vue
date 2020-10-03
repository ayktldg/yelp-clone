<template>
  <div id="app">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}

</style>
