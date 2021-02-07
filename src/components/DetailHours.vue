<template>
  <div class="d-flex font-weight-bold">
    <b-list-group>
      <b-list-group-item v-for="day in days" :key="day" class="border-0 py-1">{{
        day
      }}</b-list-group-item>
    </b-list-group>
    <b-list-group>
      <b-list-group-item
        v-for="(hour, index) in this.businessDetail.hours[0].open"
        :key="index"
        class="border-0 py-1"
        >{{ hour.start | formatHour }} AM -
        {{ hour.end | formatHour }} PM</b-list-group-item
      >
    </b-list-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    };
  },
  computed: {
    ...mapGetters({ businessDetail: "getBusinessDetail" }),
  },
  filters: {
    formatHour: function (value) {
      value = value.split("");
      value.splice(2, 0, ":");
      return value.join("");
    },
  },
};
</script>
 