import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://helm-iot-server.herokuapp.com',
    withCredentials: true
  })
}
