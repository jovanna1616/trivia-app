import VueRouter from 'vue-router'
import Vue from 'vue'
import TriviaApp from './components/TriviaApp.vue'

Vue.use(VueRouter)
  
  export const router = new VueRouter({
    routes: [
        { path: '/', component: TriviaApp }
      ]
  })