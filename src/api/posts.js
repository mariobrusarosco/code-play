import axios from 'axios'

const postsAPI = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

export default postsAPI
