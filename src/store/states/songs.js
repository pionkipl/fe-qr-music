import api from '@/helpers/api'

const songs = {
  state: {
    songs: []
  },
  mutations: {
    setSongs (state, payload) {
      state.songs = payload
    }
  },
  actions: {
    async getSongs ({ commit }) {
      try {
        const resp = await api.get('/history')
        commit('setSongs', resp.data.data)
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    songs (state) {
      return state.songs
    },
    lastSong (state) {
      return state.songs[0]
    }
  }
}

export default songs
