<template>
    <div>
        <label>用户名：</label><input type="text" v-model="userName">
        <button @click="login">登陆</button>
    </div>
</template>

<script>
  export default {
  name: 'Main',
  data() {
    return {
      userName: "",
    }
  },
  methods: {
    login () {
      let user = {
        name: this.userName
      }
      localStorage.setItem("user", JSON.stringify(user))
      this.$router.push({name: 'Main'})
    }
  }
}
</script>

<style scoped>

</style>
