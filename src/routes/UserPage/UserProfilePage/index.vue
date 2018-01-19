<template>
  <div>
    <UserForm :user="user" :userModel="userModel"></UserForm>
    <button :disabled="isSaveDisabled" class="btn btn-success" @click="saveChanges"> Save changes </button>
    <button class="btn btn-danger"> Delete user </button>
    <pre>{{userModel}}</pre>
    <pre>{{user}}</pre>
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
    }
  },
  mounted () {
    this.loadUser()
  },
  beforeRouteUpdate (to, from, next) {
    this.loadUser()
    next()
  },
  watch: {
    user: 'updateUserModel'
  }
}
</script>

<style scoped>

</style>
