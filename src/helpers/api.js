import axios from 'axios'

const api = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api
