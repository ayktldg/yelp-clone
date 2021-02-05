<template>
  <b-list-group>
    <b-list-group-item
      class="d-flex justify-content-between align-items-center"
    >
  <b-link :to="`${businessDetail.url}`">Website</b-link>
      <b-icon icon="link"></b-icon>
    </b-list-group-item>

    <b-list-group-item
      class="d-flex justify-content-between align-items-center"
    >
      {{ businessDetail.phone ? businessDetail.phone : "No Phone" }}
      <b-icon icon="telephone"></b-icon>
    </b-list-group-item>

    <b-list-group-item
      class="d-flex justify-content-between align-items-center"
    >
      {{ businessDetail.location.address1 }} {{businessDetail.location.address2}} {{businessDetail.location.address3 ? businessDetail.location.address3: ""}}
      <b-icon icon="arrow90deg-right"></b-icon>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({ businessDetail: "getBusinessDetail" }),
  },
};
</script>