<template>
<div>
    <TheNavbar />
    <div class="container">
      <h2 v-if="businessInfo.term">
        Top {{ businessInfo.term }} in {{ businessInfo.location }}
      </h2>
      <PlaceCard
        v-for="result in searchResult"
        :key="result.id"
        :result="result"
      />
    </div></div>
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
    computed: {
    ...mapGetters({
      searchResult: "getSearchResult",
      businessInfo: "getBusinessInfo",
    }),
  },
}
</script>