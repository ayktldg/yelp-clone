<template>
  <div>
    <div>
      <TheNavbar />
    </div>
    <b-container v-if="isLoading">
      <Loading />
    </b-container>
    <div v-else>
      <div
        class="hero d-flex align-items-end bg-dark mb-5"
        :style="`background-image: url(${businessDetail.image_url});`"
      >
        <b-container class="business-detail text-white">
          <b-row align-v="center" class="mb-5">
            <b-col>
              <h1 class="font-weight-bold display-6">
                {{ businessDetail.name }}
              </h1>
              <p>
                {{ businessDetail.categories[0].title }},
                {{ businessDetail.categories[0].alias }}
              </p>
              <span :class="isBusinessOpen.color">{{
                isBusinessOpen.text
              }}</span>
              <span class="mx-4">{{ businessDetail.rating }}</span>
              <span>{{ businessDetail.price }}</span>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <b-container>
        <h2 class="text-center font-weight-bold mt-4">Images</h2>
        <div class="d-flex justify-content-center flex-wrap">
          <DetailImages
            v-for="image in businessDetail.photos"
            :key="image"
            :img-src="image"
            :image="image"
          />
        </div>
        <h2 class="text-center font-weight-bold mt-4">Hours&Info</h2>
        <div class="hours-info d-flex justify-content-center flex-wrap">
          <div class="hours m-4">
            <DetailHours />
          </div>
          <div class="info m-4">
            <DetailBusinessCard />
          </div>
        </div>
      </b-container>
    </div>
    <TheFooter />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import TheNavbar from "@/components/TheNavbar";
import Loading from "@/components/Loading.vue";
import DetailImages from "@/components/DetailImages";
import DetailHours from "@/components/DetailHours";
import DetailBusinessCard from "@/components/DetailBusinessCard";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    TheNavbar,
    Loading,
    DetailImages,
    DetailHours,
    DetailBusinessCard,
    TheFooter,
  },
  data() {
    return {
      isClosed: false,
    };
  },
  computed: {
    ...mapGetters({
      businessDetail: "getBusinessDetail",
      isLoading: "getIsLoading",
    }),
    isBusinessOpen() {
      return this.isClosed
        ? { color: "text-danger", text: "Closed" }
        : { color: "text-success", text: "Open" };
    },
  },
  created() {
    this.$store.dispatch("GET_BUSINESS_DETAIL", this.$route.params.id);
    this.isClosed = this.businessDetail.is_closed;
  },
};
</script>

<style scoped>
h1 {
  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.5);
}
.hero {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 25em;
  opacity: 0.9;
  box-shadow: inset -1em -9em 7em rgba(0, 0, 0, 0.8);
}
.business-detail span,
.business-detail p {
  font-weight: 700;
  font-size: 1.2em;
}
</style>