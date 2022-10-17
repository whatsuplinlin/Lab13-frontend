import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://34.207.245.32:8999',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default apiClient
