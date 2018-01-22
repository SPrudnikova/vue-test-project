import TodoService from '@/services/todos'
import {MUTATION_DELETE_TODO_FROM_USER} from '@/store/users'

export const moduleName = 'todosModule'

export const ACTION_DELETE_TODO = `${moduleName}/actionDeleteTodo`

export const MUTATION_LOAD_TODOS = `${moduleName}/mutationLoadTodos`
export const MUTATION_DELETE_TODO = `${moduleName}/mutationDeleteTodo`

export const Todos = {
  state: {
    todos: {},
    loading: false
  },
  actions: {
    [ACTION_DELETE_TODO] ({commit}, {todoId, userId}) {
      return TodoService.deleteTodo(todoId)
        .then(response => {
          commit(MUTATION_DELETE_TODO, {data: todoId})
          commit(MUTATION_DELETE_TODO_FROM_USER, {data: {todoId, userId}})
        })
    }
  },
  mutations: {
    [MUTATION_LOAD_TODOS] (state, payload) {
      state.todos = payload.data
    },
    [MUTATION_DELETE_TODO] (state, payload) {
      delete state.todos[payload.data]
    }
  }
}
