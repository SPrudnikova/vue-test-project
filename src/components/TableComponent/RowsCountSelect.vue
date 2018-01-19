<template>
  <div class="table__select-row-qty">
    <p>Select rows quantity for the table:</p>
    <select class="form-control" :value="value" @input="changeRowsQty($event.target.value)">
      <option v-for="item in list" :key="item" :value="item">
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'RowsCountSelect',
  props: {
    value: {
      type: Number,
      default: 5
    },
    list: {
      type: Array,
      default: () => [2, 5, 10, 50]
    }
  },
  methods: {
    changeRowsQty (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>
  .table__select-row-qty {
    margin: 10px 0;
  }
</style>
