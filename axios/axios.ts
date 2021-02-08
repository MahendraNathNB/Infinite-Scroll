import Axios from 'axios'
const API = 'https://randomuser.me/api/'

const axios = Axios.create({
  baseURL: API
})

export default axios