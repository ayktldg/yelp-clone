<template>
  <div class="images m-4">
    <b-img :src="photo" class="img w-100 h-100 shadow rounded"> </b-img>
  </div>
</template>

<script>
export default {
  name: "DetailBusinessPhoto",
  props: {
    photo: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.images {
  width: 20em;
  height: 19em;
}
</style>