import BaseApi from './index'

export default class UsersApi {
  static async deleteTodo (todoId) {
    try {
      const response = await BaseApi.deleteUrl(`${BaseApi.apiURL}/todos/${todoId}`)
      return await response.data
    } catch (err) {
      console.warn('Error', err)
    }
  }
}
