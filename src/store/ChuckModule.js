import {ChuckService} from './../services/ChuckService.js';

export const ChuckModule = {
  // black box;only getter can access to state
  state: {
    randomJoke: '',
    jokeCategory: ''
  },
  // getters are reactive
  getters: {
    getRandomJoke(state) {
      return state.randomJoke;
    }
  },
  // always sync
  mutations: {
    setRandomJoke(state, joke) {
      state.randomJoke = joke;
    },
    setJokeCategory(state, category) {
      state.jokeCategory = category;
    }
  },
  // for async calls
  actions: {
    fetchRandomJoke(store, next) {
      ChuckService.getRandomJoke(store.state.jokeCategory).then((joke) => {
        // call mutation
        store.commit('setRandomJoke', joke);
        next();
      })
    }
  }
}