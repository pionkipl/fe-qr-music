import { createStore } from 'vuex'
import songs from './states/songs'
import electricity from "./states/electricity"

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    songs,
    electricity
  }
})
