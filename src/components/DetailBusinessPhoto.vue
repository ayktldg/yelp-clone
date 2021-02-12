<template>
  <div class="images m-4">
    <b-img :src="image" class="img w-100 shadow rounded"> </b-img>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DetailBusinessPhoto",
  props: {
    image: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters({ businessDetail: "getBusinessDetail" }),
  },
};
</script>

<style scoped>
.images {
  width: 20em;
}
.img {
  height: 19em;
}
</style>