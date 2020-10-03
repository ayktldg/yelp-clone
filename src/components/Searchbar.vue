<template>
  <div class="d-flex">
    <b-form-input
      v-model="searched.business"
      placeholder="Find..."
    ></b-form-input
    ><b-form-input
      v-model="searched.location"
      placeholder="Location"
    ></b-form-input>
    <b-button variant="danger" @click="sendSearched"><b-icon icon="search"></b-icon></b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searched: {
        business: "",
        location: ""
      }
    };
  },
  methods: {
      sendSearched(){
          console.log(this.searched)
      }
  }
};
</script>

<style scoped>
</style>