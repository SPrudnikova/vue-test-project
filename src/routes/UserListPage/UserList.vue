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
import Table from '@/components/TableComponent'
import RowsCountSelect from '@/components/TableComponent/RowsCountSelect'
import TablePagination from '@/components/TableComponent/TablePagination'

export default {
  name: 'UserList',
  components: {'UserTable': Table, TablePagination, RowsCountSelect},
  props: {
    users: {
      type: Array
    }
  },
  data () {
    return {
      selectedRowsQty: 2,
      selectedPage: 1,
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
