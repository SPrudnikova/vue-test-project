<template>
  <div>
    <input type="file" class="hidden" ref="image" @change="uploadImage"/>
    <input type="text" :value="value" />
    <button class="btn btn-primary" @click="selectImage">Choose image</button>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'FileUploader',
  props: {
    value: {
      type: String
    }
  },
  methods: {
    selectImage () {
      this.$refs.image.click()
    },
    uploadImage () {
      const url = 'https://api.imgur.com/3/image'
      const data = new FormData()
      data.append('image', this.$refs.image.files[0])
      const config = {
        headers: {
          'Authorization': 'Client-ID 23fa90b176851c4'
        }
      }
      axios.post(url, data, config)
        .then(res => res.data)
        .then(res => {
          this.$emit('input', res.data.link)
          // this.user.picture = res.data.link
          this.$refs.image.value = ''
        })
    }
  }
}
</script>

<style scoped>

</style>
