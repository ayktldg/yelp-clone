<template>
  <div class="info-list">
    <b-list-group>
      <b-list-group-item
        class="d-flex justify-content-between align-items-center p-4"
      >
        <b-link :to="`${businessDetail.url}`">Website</b-link>
        <b-icon icon="link"></b-icon>
      </b-list-group-item>

      <b-list-group-item
        class="d-flex justify-content-between align-items-center p-4"
      >
        {{ businessDetail.phone ? businessDetail.phone : "No Phone" }}
        <b-icon icon="telephone"></b-icon>
      </b-list-group-item>

      <b-list-group-item
        v-if="allAdress"
        class="d-flex justify-content-between align-items-center p-4"
      >
        {{ allAdress }}
        <b-icon icon="arrow90deg-right"></b-icon>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      adress: "",
    };
  },
  computed: {
    ...mapGetters({ businessDetail: "getBusinessDetail" }),
    allAdress() {
      return `${
        this.businessDetail.location.address1
          ? this.businessDetail.location.address1
          : "Address not specified"
      } ${
        this.businessDetail.location.address2
          ? this.businessDetail.location.address2
          : ""
      } ${
        this.businessDetail.location.address3
          ? this.businessDetail.location.address3
          : ""
      }`;
    },
  },
};
</script>

<style scoped>
.info-list{
  width: 24em;
}
</style>