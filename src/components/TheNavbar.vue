<template>
  <div>
    <b-navbar variant="faded" type="light" class="border-bottom">
      <b-container class="py-4 px-2 justify-content-between">
        <b-navbar-brand to="/" class="font-weight-bold">Yelp</b-navbar-brand>
        <TheSearchBar />
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
import TheSearchBar from "./TheSearchBar";
export default {
  name: "TheNavbar",
  components: {
    TheSearchBar,
  },
};
</script>
