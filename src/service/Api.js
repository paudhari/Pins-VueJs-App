import axios from 'axios'

export default (() => (
  axios.create({
    baseURL: 'http://54.145.118.98:5000/',
    'Content-Type': 'application/json'
  })
))()
