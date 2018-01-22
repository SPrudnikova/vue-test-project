<template>
  <UserList :users="users"></UserList>
</template>

<script>
import { mapActions } from 'vuex'

import UserList from '@/routes/UserListPage/UserList.vue'
import {ACTION_LOAD_USERS} from '@/store/users'

export default {
  name: 'UserListPage',
  components: {UserList},
  computed: {
    users () {
      return this.$store.state.usersModule.users
    }
  },
  mounted () {
    this.loadUsers()
  },
  methods: {
    ...mapActions({
      loadUsers: ACTION_LOAD_USERS
    })
  }
}
</script>
