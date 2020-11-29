<template>
    <div>
        <h1>欢迎来到聊天室</h1>
        <ul v-for="room in roomList">
          <li @click="enterRoom(room)">{{room.name}}</li>
        </ul>
    </div>
</template>

<script>
  import request from '../api/request'
  export default {
  name: 'Main',
  data() {
    return {
      roomList: [],
    }
  },
  methods: {
    init () {
      request.roomList()
        .then(res => {
          if (res.code === 0) {
            this.room = res.data
          } else {
            alert(res.msg)
          }
        })
    },
    enterRoom (room) {
      localStorage.setItem("room", JSON.stringify(room))
      this.$router.push({name: 'Room'})
    }
  },
  created () {
    this.init()
  }
}
</script>

<style scoped>

</style>
