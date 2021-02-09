<template>
  <div>
    <TheNavbar />
    <b-container class="text-center mt-5">
      <h2 v-if="businessInfo.term && businessInfo.location">
        Top {{ businessInfo.term }} in {{ businessInfo.location }}
      </h2>
    </b-container>
    <b-container class="mt-4 mb-5 d-flex flex-wrap px-3">
      <BusinessCard
        v-for="(result, index) in paginatedResults"
        :key="result.id"
        :result="result"
        :index="index"
      />
    </b-container>
    <b-container class="">
      <div class="overflow-auto">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="results"
          align="center"
          pills
        ></b-pagination>
        <b-table
          id="results"
          :per-page="perPage"
          :current-page="currentPage"
          small
        ></b-table>
      </div>
    </b-container>
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
      perPage: 4,
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

<style scoped>
</style>

