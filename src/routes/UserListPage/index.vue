<template>
  <div class="panel panel-primary">
    <div class="panel-heading">User list</div>
    <div class="panel-body">
      <UserTable :headerFields="headerFields"
                 :data="users"
                 :selectedRowsQty="Number(selectedRowsQty)"
                 :selectedPage="selectedPage"
                 :title="tableHeader">
        <RowsCountSelect slot="rowsCountSelect" v-model.number="selectedRowsQty"></RowsCountSelect>
        <TablePagination slot="tablePagination" v-model="selectedPage" :totalPage="totalPage"></TablePagination>
      </UserTable>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import Table from '@/components/TableComponent'
import RowsCountSelect from '@/components/TableComponent/RowsCountSelect'
import TablePagination from '@/components/TableComponent/TablePagination'

export default {
  name: 'UserListPage',
  data () {
    return {
      selectedRowsQty: 2,
      selectedPage: 1,
      users: [],
      headerFields: [
        {key: 'id', value: '#', link: true},
        {key: 'firstName', value: 'Имя'},
        {key: 'lastName', value: 'Фамилия'},
        {key: 'isActive', value: 'Активен'},
        {key: 'balance', value: 'Баланс'},
        {key: 'email', value: 'Email'},
        {key: 'phone', value: 'Телефон'},
        {key: 'registered', value: 'Зарегестрирован'}
      ]
    }
  },
  components: {'UserTable': Table, TablePagination, RowsCountSelect},
  methods: {
    loadUsers () {
      axios.get('http://localhost:3000/users')
        .then(response => {
          this.users = response.data
        })
    }
  },
  mounted () {
    this.loadUsers()
  },
  computed: {
    totalPage () {
      return Math.ceil(this.users.length / this.selectedRowsQty)
    },
    usersCount () {
      return this.users.length
    },
    tableHeader () {
      return `Total users quantity - ${this.usersCount}`
    }
  }
}
</script>

<style scoped>

</style>
