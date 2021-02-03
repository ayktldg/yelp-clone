<template>
  <div>
    <div class="places my-4">
        <b-link :to="{name: 'BusinessDetail', params: {id: result.id}}">
        <b-card
          :img-src="`${result.image_url}`"
          img-alt="Card image"
          img-left
          img-height="200"
          img-width="200"
          :title="`${result.name}`"
          class="mb-3 col-md-8"
        >
          <small>
            {{ result.price }} 
            </small
          ><small>
          {{ result.is_closed ? "Open" : "Closed" }}
          </small>
          <small>
          {{ result.phone }}
          </small>
          <small>
          {{ result.rating }}
          </small>
          <b-card-text>
              {{ result.location.address1 }}
          </b-card-text>
          <b-card-text>
              {{ result.location.address2 }}
          </b-card-text>
        </b-card>
    </b-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    result: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
