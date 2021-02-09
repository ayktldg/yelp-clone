<template>
  <div>
    <TheNavbar />
    <div class="container">
      <h2 v-if="businessInfo.term">
        Top {{ businessInfo.term }} in {{ businessInfo.location }}
      </h2>

      <BusinessCard
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
    <TheFooter />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import BusinessCard from "@/components/BusinessCard.vue";
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    TheNavbar,
    BusinessCard,
    TheFooter,
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

