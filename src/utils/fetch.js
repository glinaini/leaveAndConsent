import axios from 'axios'
const service = axios.create({
  baseUrl: process.env.BASE_API,
  timeout: 15000
})
export default service
