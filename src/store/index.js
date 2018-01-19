import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  state: {
    todosCount: 0
  },
  strict: debug,
  mutations: {
    addTodo (state, payload) {
      console.log('payload', payload)
      state.todosCount++
    }
  },
  actions: {
    incrementAsync ({ commit }, payload) {
      setTimeout(() => {
        commit('addTodo', payload)
      }, 1000)
    }
  }
})

export default store
