<template>
<div>
  <b-card title="Card Title"
          :img-src="randomJoke.iconUrl"
          img-alt="Image"
          img-top
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      {{ randomJoke.value }}
    </p>
     <b-button
     @click="getNewJoke">
        bla  bla
      </b-button>
  </b-card>
  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text">Search</span>
    </div>
    <input @input="setCategory" class="form-control" aria-label="Search">
  </div>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { store } from './../store'

export default {
  name: 'Chuck',
  computed: {
    ...mapGetters({
      randomJoke: 'getRandomJoke'
    })
  },
  methods: {
    ...mapMutations([
      'setJokeCategory'
    ]),
    getNewJoke() {
      store.dispatch('fetchRandomJoke', () => {})
    },
    setCategory(event) {
      this.setJokeCategory(event.target.value)
    }
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch('fetchRandomJoke', next);
  }
}
</script>
