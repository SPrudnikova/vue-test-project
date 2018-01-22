<template>
  <div class="table-container">
    <div class="panel panel-default">
      <div class="panel-heading">{{title}}</div>
      <div class="panel-body">

        <slot name="rowsCountSelect"></slot>

        <table>
          <tr class="user-table__header-row">
            <th v-for="headerField in headerFields" :key="headerField.key" class="user-table__cell">
              {{headerField.value}}
            </th>
          </tr>
          <tr v-for="user in paginatedData" :key="user.id" class="striped user-table__border-bottom-row">
            <slot name="rows" v-bind="user"></slot>
          </tr>
        </table>

        <slot name="tablePagination"></slot>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableComponent',
  props: {
    headerFields: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    selectedRowsQty: {
      type: Number
    },
    selectedPage: {
      type: Number,
      default: 1
    },
    title: {
      type: String,
      default: 'Table'
    }
  },
  computed: {
    paginatedData () {
      if (this.selectedRowsQty) {
        const startIndex = this.selectedRowsQty * (this.selectedPage - 1)
        return this.data.slice(startIndex, startIndex + this.selectedRowsQty)
      } else {
        return this.data
      }
    }
  }
}
</script>

<style scoped>
  .table-container {
    overflow-x: auto;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }

  .striped:nth-child(even) {
    background-color: rgba(0, 0, 0, .05)
  }

  .user-table__cell {
    padding: 3px 7px;
  }

  .user-table__header-row {
    border-bottom: solid #ccc 2px;
  }

  .user-table__border-bottom-row {
    border-bottom: solid #ccc 1px;
  }

  .user-table__border-bottom-row:last-child {
    border-bottom: none;
  }

</style>
