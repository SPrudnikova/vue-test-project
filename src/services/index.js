import axios from 'axios'

export default class BaseApi {
  static apiURL = 'http://localhost:3000'

  static getUrl (url) {
    return axios.get(url)
  }

  static deleteUrl (url) {
    return axios.delete(url)
  }
}
