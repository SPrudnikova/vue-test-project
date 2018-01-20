<template>
  <div ref="editor" class="editor">
    <p>{{defaultValue}}</p>
  </div>
</template>

<script>
import MediumEditor from 'medium-editor'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/bootstrap.css'

export default {
  name: 'MediumEditor',
  props: ['value'],
  data: () => ({
    enteredValue: this.value,
    defaultValue: this.value,
    editor: null
  }),
  watch: {
    value: 'updateValues'
  },
  mounted () {
    this.editor = new MediumEditor(this.$refs.editor, {placeholder: false})
    this.editor.subscribe('editableInput', this.getValue)
    this.editor.on(this.$refs.editor, 'blur', this.sendValueUp)
  },
  beforeDestroy () {
    this.editor.destroy()
  },
  methods: {
    getValue (event, editable) {
      this.enteredValue = editable.innerText
    },
    updateValues () {
      this.enteredValue = this.value
      this.defaultValue = this.value
    },
    sendValueUp () {
      this.$emit('input', this.enteredValue)
    }
  }
}
</script>

<style scoped>
  .editor {
    border-radius: 5px;
    border: solid #ccc 1px;
    padding: 5px;
    outline: none;
  }
</style>
