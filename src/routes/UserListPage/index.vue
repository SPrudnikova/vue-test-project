<template>
  <UserList :users="users"></UserList>
</template>

<script>
import { mapActions } from 'vuex'

import UserList from '@/routes/UserListPage/UserList.vue'

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
      loadUsers: 'loadUsers'
    })
  }
}
</script>
