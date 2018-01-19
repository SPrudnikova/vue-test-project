<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li :class="{ disabled: selectedPage === 1 }" @click.prevent="goPrevious">
        <a href="#" aria-label="Previous" >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li v-for="page in totalPage" :key="page" @click.prevent="selectPage(page)" :class="{ active: page === selectedPage }">
        <a href="#">{{page}}</a></li>
      <li :class="{ disabled: selectedPage === totalPage }" @click.prevent="goNext">
        <a href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TablePagination',
  model: {
    prop: 'selectedPage',
    event: 'select'
  },
  props: {
    selectedPage: {
      type: Number,
      default: 1
    },
    totalPage: {
      type: Number,
      required: true
    }
  },
  methods: {
    selectPage (page) {
      this.$emit('select', page)
    },
    goPrevious () {
      const pageNumber = this.selectedPage - 1
      if (pageNumber > 0) {
        this.$emit('select', pageNumber)
      }
    },
    goNext () {
      const pageNumber = this.selectedPage + 1
      if (pageNumber <= this.totalPage) {
        this.$emit('select', pageNumber)
      }
    }
  }
}
</script>

<style scoped>

</style>
