import { normalize } from 'normalizr'

import BaseApi from './index'
import {UserListSchema} from '@/normalizr_schema'

export default class UsersApi {
  static async getUsers () {
    try {
      const response = await BaseApi.getUrl(`${BaseApi.apiURL}/users`)
      return await response.data
    } catch (err) {
      console.warn('Error', err)
    }
  }

  static async getUsersWithTodos () {
    try {
      const response = await BaseApi.getUrl(`${BaseApi.apiURL}/users?_embed=todos`)
      const normalizedData = normalize(await response.data, UserListSchema)
      return {users: Object.values(normalizedData.entities.users), todos: normalizedData.entities.todos}
    } catch (err) {
      console.warn('Error', err)
    }
  }
}
