import axios from 'axios'
import { normalize } from 'normalizr'

import {UserListSchema} from '@/normalizr_schema'

export const Users = {
  state: {
    loading: false,
    users: []
  },
  actions: {
    loadUsers ({commit, rootState}) {
      axios.get(`${rootState.apiURL}/users?_embeded=todos`)
        .then(response => {
          const normalizedData = normalize(response.data, UserListSchema)
          this.users = Object.values(normalizedData.entities.users)
          commit('loadUsers', {
            data: this.users
          })
        })
    }
  },
  mutations: {
    loadUsers (state, payload) {
      state.users = payload.data
    }
  }
}
