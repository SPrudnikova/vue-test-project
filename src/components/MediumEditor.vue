<template>
  <div ref="editor" class="editor">{{value}}</div>
</template>

<script>
import MediumEditor from 'medium-editor'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/bootstrap.css'

export default {
  name: 'MediumEditor',
  props: ['value'],
  data: () => ({
    editor: null
  }),
  mounted () {
    this.editor = new MediumEditor(this.$refs.editor)
    this.editor.subscribe('editableInput', this.getValue)
  },
  watch: {
    value: 'setNewContent'
  },
  methods: {
    getValue (event, editable) {
      this.$emit('input', editable.innerHTML)
    },
    setNewContent () {
      this.editor.setContent(this.value)
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
