<template>
  <input type="text" ref="picker" class="form-control" :value="value">
</template>

<script>
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'

export default {
  name: 'DatePicker',
  props: {
    value: {
      type: String
    }
  },
  data: () => ({
    fp: null
  }),
  watch: {
    value: 'updateDatePicker'
  },
  mounted () {
    this.fp = flatpickr(this.$refs.picker, {
      dateFormat: 'd.m.Y',
      onChange: (selectedDate, dateStr) => {
        this.$emit('input', dateStr)
      }
    })
  },
  methods: {
    updateDatePicker () {
      this.fp.setDate(this.value)
    }
  }
}
</script>

<style scoped>

</style>
