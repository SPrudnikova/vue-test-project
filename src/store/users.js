import UserService from '@/services/users'
import {MUTATION_LOAD_TODOS} from '@/store/todos'

export const moduleName = 'usersModule'

export const ACTION_LOAD_USERS = `${moduleName}/actionLoadUsers`
export const ACTION_LOAD_USERS_WITH_TODOS = `${moduleName}/actionLoadUsersWithTodos`

export const MUTATION_LOAD_USERS = `${moduleName}/mutationLoadUsers`
export const MUTATION_DELETE_TODO_FROM_USER = `${moduleName}/mutationDeleteTodoFromUser`

export const Users = {
  state: {
    loading: false,
    users: []
  },
  actions: {
    [ACTION_LOAD_USERS] ({commit, state}) {
      if (Users.checkIfDataNotExists([state.users])) {
        return UserService.getUsers()
          .then(response => {
            commit(MUTATION_LOAD_USERS, {data: response})
          })
      }
    },
    [ACTION_LOAD_USERS_WITH_TODOS] ({commit, state, rootState}) {
      if (Users.checkIfDataNotExists([state.users, rootState.todosModule.todos])) {
        return UserService.getUsersWithTodos()
          .then(response => {
            commit(MUTATION_LOAD_USERS, {data: response.users})
            commit(MUTATION_LOAD_TODOS, {data: response.todos})
          })
      }
    }
  },
  mutations: {
    [MUTATION_LOAD_USERS] (state, payload) {
      state.users = payload.data
    },
    [MUTATION_DELETE_TODO_FROM_USER] (state, payload) {
      state.users = state.users.map(user => {
        if (user.id === payload.data.userId) {
          const todos = user.todos.filter(todo => todo !== payload.data.todoId)
          return {...user, todos: todos}
        } else {
          return user
        }
      })
    }
  },

  checkIfDataNotExists: function (data) {
    return data.filter(item => (!item || item.length === 0 || Object.keys(item).length === 0)).length
  }
}
