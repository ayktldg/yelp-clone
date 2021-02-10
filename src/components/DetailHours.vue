<template>
  <div class="d-flex font-weight-bold w-100">
    <b-list-group>
      <b-list-group-item
        v-for="day in days"
        :key="day"
        class="border-0 py-1 pl-0"
        >{{ day }}</b-list-group-item
      >
    </b-list-group>
    <b-list-group>
      <b-list-group-item
        v-for="(hour, index) in this.businessDetail.hours[0].open"
        :key="index"
        class="border-0 py-1 pr-0"
        >{{ hour.start | formatHour | formatDayTime }} -
        {{ hour.end | formatHour | formatDayTime }}
      </b-list-group-item>
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
    formatHour(value) {
      value = value.split("");
      value.splice(2, 0, ":");
      return value.join("");
    },
    formatDayTime(value) {
      let arrValue = value.split("");
      let dividedValue = arrValue.slice(0, 2);
      let newValue = dividedValue.join("");
      let hour = Number(newValue);
      if (hour > 12) {
        return `${value} PM`;
      } else {
        return `${value} AM`;
      }
    },
  },
};
</script>
 