<template>
  <div>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
    >
      <!-- Slides with image only -->
      <b-carousel-slide
        class="slide-img"
        v-for="image in businessDetail.photos"
        :key="image"
        :img-src="image"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ businessDetail: "getBusinessDetail" }),
  },
};
</script>

<style scoped>
</style>