import Vuex from 'vuex'
import Vue from 'vue'

import {Todos, moduleName as todosModule} from './todos'
import {Users, moduleName as usersModule} from './users'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  state: {
    apiURL: 'http://localhost:3000'
  },
  strict: debug,
  modules: {
    [usersModule]: Users,
    [todosModule]: Todos
  }
})

export default store
