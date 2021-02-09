<template>
  <div class="home">
    <div class="header d-flex align-items-center justify-content-center">
      <b-container class="text-white text-center">
        <h1 class="display-4 font-weight-bold">Yelp</h1>
        <p><strong>Search every location you want to look</strong></p>
        <Searchbar />
      </b-container>
    </div>
    <TheFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import Searchbar from "@/components/Searchbar.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  name: "Home",
  components: {
    Searchbar,
    TheFooter
  },
};
</script>
<style scoped>
.header {
  background-image: url("../assets/restaurant.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  opacity: 0.8;
  width: 100%;
  height: 87vh;
}
</style>
