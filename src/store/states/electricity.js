import api from '@/helpers/api'

const electricity = {
  state: {
    logs: []
  },
  mutations: {
    setLogs (state, payload) {
      state.logs = payload
    }
  },
  actions: {
    async getLogs ({ commit }) {
      try {
        const resp = await api.get('/electricity')
        commit('setLogs', resp.data.data)
      } catch (e) {
        console.log(e)
      }
    }
  },
  getters: {
    logs (state) {
      return state.logs
    }
  }
}

export default electricity
