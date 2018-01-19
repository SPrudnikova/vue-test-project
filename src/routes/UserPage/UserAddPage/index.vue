<template>
  <UserForm></UserForm>
</template>

<script>
import UserForm from '@/components/UserForm'
export default {
  name: 'UserFormPage',
  data () {
    return {hi: 'hi'}
  },
  components: {'UserForm': UserForm}
}
</script>

<style scoped>

</style>
