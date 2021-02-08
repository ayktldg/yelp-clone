<template>
  <div>
    <b-input-group>
      <b-form-input
        v-model="business.term"
        @keyup.enter="searchBusiness"
        placeholder="Find..."
      ></b-form-input
      ><b-form-input v-model="business.location"></b-form-input>
      <b-input-group-append>
        <b-button variant="danger" @click="searchBusiness"
          ><b-icon icon="search"></b-icon
        ></b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      business: {
        term: "",
        location: "",
      },
    };
  },
  methods: {
    searchBusiness() {
      this.$store.dispatch("SET_BUSINESS", this.business);
      this.$router.push({name: "SearchResults", params: { search: `${this.business.term}`}})
    },
  },
};
</script>

<style scoped>
</style>