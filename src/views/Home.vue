<template>
  <div class="home">
    <div class="header d-flex align-items-center justify-content-center">
      <div class="w-75 text-white text-center">
        <h1>Yelp</h1>
        <p><strong>Search every location you want to look</strong></p>
      <Searchbar />
      </div>
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
 import Searchbar from "@/components/Searchbar.vue";

export default {
  name: "Home",
  components: {
    Searchbar
  },
  data() {
    return {
  
    };
  }
};
</script>
<style scoped>
.header {
  background-image: url("../assets/restaurant.jpg");
background-repeat: no-repeat; background-size: cover; background-position: center center;
  width: 100%;
  height: 100vh;
}
</style>
