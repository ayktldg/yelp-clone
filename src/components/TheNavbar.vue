<template>
  <div>
    <b-navbar variant="faded" type="light">
      <b-navbar-brand href="#">Yelp</b-navbar-brand>
      <Searchbar />
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