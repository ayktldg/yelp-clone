<template>
  <div>
    <b-navbar variant="faded" type="light" class="border-bottom">
      <b-container class="py-4 px-2 justify-content-between">
        <b-navbar-brand to="/" class="font-weight-bold">Yelp</b-navbar-brand>
      <Searchbar />
      </b-container>
      
    </b-navbar>
  </div>
</template>

<script>
import Searchbar from "./Searchbar";
export default {
  components: {
    Searchbar,
  },
};
</script>

<style scoped>
i{
  color: black;
  width:30px;
  height:30px;
}
</style>