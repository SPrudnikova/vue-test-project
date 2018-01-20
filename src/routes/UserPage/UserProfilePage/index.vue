<template>
  <div>
    <UserForm :userModel="userModel"></UserForm>
    <button :disabled="isSaveDisabled" class="btn btn-success" @click="saveChanges"> Save changes </button>
    <button class="btn btn-danger" @click="removeUser"> Remove user </button>
  </div>
</template>

<script>
import axios from 'axios'

import UserForm from '@/components/UserForm'

export default {
  name: 'UserProfilePage',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {'UserForm': UserForm},
  data: () => ({
    user: {},
    userModel: {}
  }),
  computed: {
    isSaveDisabled () {
      return this.errors.all().length !== 0
    }
  },
  watch: {
    user: 'updateUserModel'
  },
  mounted () {
    this.loadUser()
  },
  beforeRouteUpdate (to, from, next) {
    this.loadUser()
    next()
  },
  methods: {
    loadUser () {
      axios.get(`http://localhost:3000/users/${this.id}`)
        .then(response => {
          this.user = response.data
        })
    },
    updateUserModel (user) {
      this.userModel = Object.assign({}, this.userModel, user)
    },
    saveChanges () {
      axios.patch(`http://localhost:3000/users/${this.id}`, this.userModel)
        .then((res) => {
          this.user = res.data
        })
    },
    removeUser () {
      axios.delete(`http://localhost:3000/users/${this.id}`)
        .then(() => {
          this.$router.push({ path: '/users-list' })
        })
    }
  }
}
</script>

<style scoped>

</style>
