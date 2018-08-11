import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://helm-iot-server.herokuapp.com',
    // baseURL: 'http://localhost:3000',
    withCredentials: true
  })
}
