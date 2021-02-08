<template>
  <div>
    <TheNavbar />
    <div class="container">
      <h2 v-if="businessInfo.term">
        Top {{ businessInfo.term }} in {{ businessInfo.location }}
      </h2>

      <PlaceCard
        v-for="result in paginatedResults"
        :key="result.id"
        :result="result"
      />
      <div class="overflow-auto">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="results"
        ></b-pagination>
        <b-table
          id="results"
          :per-page="perPage"
          :current-page="currentPage"
          small
        ></b-table>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import PlaceCard from "@/components/PlaceCard.vue";
import TheNavbar from "@/components/TheNavbar.vue";
export default {
  components: {
    TheNavbar,
    PlaceCard,
  },
  data() {
    return {
      perPage: 3,
      currentPage: 1,
    };
  },

  computed: {
    ...mapGetters({
      searchResult: "getSearchResult",
      businessInfo: "getBusinessInfo",
    }),
    rows() {
      console.log(this.searchResult.length);
      return this.searchResult.length;
    },
    paginatedResults() {
      return this.searchResult.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },
  },
};
</script>

