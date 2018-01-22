<template>
  <DashboardList :users="users"></DashboardList>
</template>

<script>
import { mapActions } from 'vuex'

import DashboardList from '@/routes/DashboardPage/DashboardList.vue'
import {ACTION_LOAD_USERS_WITH_TODOS} from '@/store/users'

export default {
  name: 'DashboardPage',
  components: {DashboardList},
  computed: {
    users () {
      const {usersModule, todosModule} = this.$store.state
      return usersModule.users.map(user => {
        const todos = user.todos.map(todo => todosModule.todos[todo])
        return {
          ...user,
          todos
        }
      })
    }
  },
  mounted () {
    this.loadUsersWithTodos()
  },
  methods: {
    ...mapActions({
      loadUsersWithTodos: ACTION_LOAD_USERS_WITH_TODOS
    })
  }
}
</script>
