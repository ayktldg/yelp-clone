<template>
  <div class="home">
    <div class="header d-flex align-items-center justify-content-center">
      <div class="container text-white text-center">
        <h1>Yelp</h1>
        <p><strong>Search every location you want to look</strong></p>
        <Searchbar />
      </div>
    </div>
    <div class="container">
      <h2 v-if="businessInfo.term">
        Top {{ businessInfo.term }} in {{ businessInfo.location }}
      </h2>
      <PlaceCard
        v-for="result in searchResult"
        :key="result.id"
        :result="result"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Searchbar from "@/components/Searchbar.vue";
import PlaceCard from "@/components/PlaceCard.vue";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    Searchbar,
    PlaceCard,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      searchResult: "getSearchResult",
      businessInfo: "getBusinessInfo",
    }),
  },
};
</script>
<style scoped>
.header {
  background-image: url("../assets/restaurant.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  opacity: 0.9;
  width: 100%;
  height: 90vh;
}
</style>
