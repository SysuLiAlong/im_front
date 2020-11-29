<template>
    <div>
        <h1>{{room.name}}</h1>
        <h2>{{user.userName}}</h2>
        <input type="text" v-model="msg"> <button @click="send">发送</button> <button @click="leaveRoom">退出</button>
        <ul v-for="meg in messageList">
          <li>{{msg}}</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      room: {},
      user: {},
      messageList: [],
      msg: null,
      path: ""
    }
  },
  methods: {
    initData () {
      this.room = JSON.parse(localStorage.getItem("room"))
      this.user = JSON.parse(localStorage.getItem("user"))
      this.path = process.env.API_HOST + 'websocket/' + this.room.id + '/' + this.user.name
    },
    initSocket () {
      if(typeof(WebSocket) === "undefined"){
        alert('您的浏览器不支持socket')
      }else{
        // 实例化socket
        this.socket = new WebSocket(this.path)
        // 监听socket连接
        this.socket.onopen = this.open
        // 监听socket错误信息
        this.socket.onerror = this.error
        // 监听socket消息
        this.socket.onmessage = this.getMessage
      }
    },
    open: function () {
      console.log('socket连接成功')
    },
    error: function () {
      console.log('连接错误')
    },
    getMessage: function (msg) {
      console.log(msg.data)
      this.messageList.push(msg)
    },
    send: function () {
      this.socket.send(this.msg)
    },
    close: function () {
      console.log('socket已经关闭')
    },
    leaveRoom: function () {
      this.close()
      this.$router.push({name: 'Main'})
    }
  },
  created () {
    this.initData()
    this.initSocket()
  }
}
</script>

<style scoped>

</style>
