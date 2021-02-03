<template>
  <div
    class="d-flex align-items-center bg-dark"
    :style="`background-image: url(${businessDetail.image_url});background-repeat: no-repeat; 
     background-size: cover; 
     background-position: center center; height: 400px; opacity: .9;`"
  >
    <b-container class="business-detail text-white">
      <b-row align-v="center">
        <b-col cols="6" md="4">
          <h1>{{ businessDetail.name }}</h1>
          <p>Rating: {{ businessDetail.rating }}</p>
          <p>Price: {{ businessDetail.price }}</p>
          <p>{{ businessDetail.is_closed ? "Closed" : "Open" }}</p>
          <div>
            <p>Category: {{
              businessDetail.categories[0].title
            }},{{
              businessDetail.categories[0].alias
            }}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  created() {
    this.$store.dispatch("GET_BUSINESS_DETAIL", this.$route.params.id);
  },
  computed: {
    ...mapGetters({ businessDetail: "getBusinessDetail" }),
  },
};
</script>

<style scoped>
h1{
  font-weight: 900;
  font-size: 2em;
  text-shadow: 2px 2px 4px #000000;
}
.business-detail span,
.business-detail p {
  font-weight: 700;
  font-size: 1.5em;
  text-shadow: 2px 2px 4px #000000;
}
</style>