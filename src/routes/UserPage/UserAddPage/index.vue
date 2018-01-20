<template>
  <div>
    <UserForm :userModel="userModel"></UserForm>
    <button :disabled="isSaveDisabled" class="btn btn-success" @click="saveUser"> Save user </button>
  </div>
</template>

<script>
import axios from 'axios'

import UserForm from '@/components/UserForm'

export default {
  name: 'UserAddPage',
  components: {'UserForm': UserForm},
  data: () => ({
    userModel: {
      isActive: true,
      balance: '',
      picture: 'http://placehold.it/128x128',
      age: '',
      accessLevel: '',
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      phone: '',
      address: '',
      about: '',
      registered: ''
    }
  }),
  computed: {
    isSaveDisabled () {
      return this.errors.all().length !== 0
    }
  },
  methods: {
    updateUserModel (user) {
      this.userModel = Object.assign({}, this.userModel, user)
    },
    saveUser () {
      axios.post(`http://localhost:3000/users/`, this.userModel)
        .then((res) => {
          this.$router.push('/users-list')
        })
    }
  }
}
</script>

<style scoped>

</style>
