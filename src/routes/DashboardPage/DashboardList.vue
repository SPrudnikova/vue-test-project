<template>
  <div class="panel panel-primary">
    <div class="panel-heading">User list</div>
    <div class="panel-body">
      <UserTable :headerFields="headerFields"
                 :data="users"
                 :title="tableHeader">
        <template slot="rows" slot-scope="props">
          <td  class="user-table__cell">
            <router-link :to="`/user/${props.id}`">
              {{props.id}}
            </router-link>
          </td>
          <td  class="user-table__cell">{{props.firstName}}</td>
          <td  class="user-table__cell">{{props.lastName}}</td>
          <td  class="user-table__cell">{{props.isActive}}</td>
          <td  class="user-table__cell">{{props.email}}</td>
          <td  class="user-table__cell">
            <span v-for="todo in props.todos" :key="todo.id">
              <router-link :to="`/todo/${todo.id}/user/${props.id}`">
                {{todo.title}}
              </router-link>
              <i class="fa fa-times dashboard__delete-todo" aria-hidden="true" title="Delete todo" @click="deleteTodo({todoId: todo.id, userId: props.id})"></i>
              <i class="fa fa-user-times dashboard__reassign-todo" aria-hidden="true" title="Reassign todo"></i>
              <br>
            </span>
          </td>
        </template>
      </UserTable>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Table from '@/components/TableComponent'
import {ACTION_DELETE_TODO} from '@/store/todos'

export default {
  name: 'DashboardList',
  components: {'UserTable': Table},
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
        {key: 'email', value: 'Email'},
        {key: 'todos', value: 'Todos'}
      ]
    }
  },
  computed: {
    usersCount () {
      return this.users.length
    },
    totalPage () {
      return Math.ceil(this.usersCount / this.selectedRowsQty)
    },
    tableHeader () {
      return `Total users quantity - ${this.usersCount}`
    }
  },
  methods: {
    ...mapActions({
      deleteTodo: ACTION_DELETE_TODO
    })
  }
}
</script>

<style lang="scss" scoped>
.dashboard__delete-todo {
  color: #d9534f;
  &:hover {
    cursor: pointer;
    color: #c9302c;
  }
}
.dashboard__reassign-todo {
  color: #337ab7;
  &:hover {
    cursor: pointer;
    color: #286090;
  }
}
</style>
