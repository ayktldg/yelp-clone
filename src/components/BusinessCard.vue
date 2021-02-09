<template>
  <div>
    <b-link
      class="link"
      :to="{ name: 'BusinessDetail', params: { id: result.id } }"
    >
      <b-card no-body class="card overflow-hidden m-3">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img :src="result.image_url" class="image"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body :title="`${index + 1}.${result.name}`" class="">
              <b-card-text class="font-weight-bold text-light mt-4">
                <small class="bg-info rounded p-2">{{
                  result.is_closed ? "Closed" : "Open"
                }}</small>
                <small class="bg-danger p-2 rounded mx-4">{{
                  result.rating
                }}</small>
                <small
                  class="bg-success rounded-circle p-2"
                  v-if="result.price"
                  >{{ result.price }}</small
                >
              </b-card-text>
              <b-card-text class="mt-4 mb-2 text-secondary">
                {{ result.phone }}
              </b-card-text>
              <b-card-text class="text-secondary">
                {{ result.location.address1 }}
                {{ result.location.address2 }}
                {{ result.location.address3 }}
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-link>
  </div>
</template>

<script>
export default {
  props: {
    result: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.link {
  color: black;
  text-decoration: none;
}
.card {
  max-width: 32em;
  border-radius: 0.6em;
  box-shadow: 0px 8px 12px 1px rgba(0, 0, 0, 0.1);
}
.card:hover {
  box-shadow: 4px 8px 12px 1px rgba(0, 0, 0, 0.2);
}
.image {
  height: 15em;
}
</style>
