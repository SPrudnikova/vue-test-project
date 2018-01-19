<template>
  <div class="hello" v-if="show">
    <div v-for="user in userList" :key="user.id" class="user-list__border-bottom">
      <p :class="{'no-avatar': !user.img}">{{getFIO(user) | uppercase}}</p>
      <img v-if="user.img" :src="user.img" height="60">
      <span v-else>У пользователя нет фото</span>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      show: true,
      userList: [
        {
          id: 1,
          firstName: 'Иван',
          lastName: 'Иванов',
          middleName: 'Иванович',
          img: 'https://medizzy.com/_nuxt/img/user-placeholder.d2a3ff8.png'
        },
        {
          id: 2,
          firstName: 'Петр',
          lastName: 'Петров',
          middleName: 'Петрович',
          img: 'https://conferencecloud-assets.s3.amazonaws.com/default_avatar.png'
        },
        {
          id: 3,
          firstName: 'Игорь',
          lastName: 'Игорев',
          middleName: 'Игоревич'
        },
        {
          id: 4,
          firstName: 'Денис',
          lastName: 'Денисов',
          middleName: 'Денисович',
          img: 'https://t4.ftcdn.net/jpg/00/78/73/53/240_F_78735333_o3qJe4bT5ciwldLIjVDulFKrDAV3jGYO.jpg'
        }
      ]
    }
  },
  computed: {
    ...mapState(['todosCount'])
  },
  methods: {
    getFIO: function (item) {
      return `${item.lastName} ${item.firstName[0]}. ${item.middleName[0]}.`
    },
    ...mapActions(['incrementAsync'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .user-list__border-bottom {
    border-bottom: solid gray 1px;
  }
  .no-avatar {
    color: red;
  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
