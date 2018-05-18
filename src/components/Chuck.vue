<template>
  <b-card title="Card Title"
          :img-src="randomJoke.iconUrl"
          img-alt="Image"
          img-top
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      {{ randomJoke.value }}
    </p>
  </b-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { store } from './../store'

export default {
  name: 'Chuck',
  computed: {
    ...mapGetters({
      randomJoke: 'getRandomJoke'
    })
  },
  methods: {
    ...mapActions([
      'fetchRandomJoke'
    ])
  },
  // created() {
  //   this.fetchRandomJoke();
  // },
  beforeRouteEnter(to, from, next) {
    store.dispatch('fetchRandomJoke', next);
  }
}
</script>
