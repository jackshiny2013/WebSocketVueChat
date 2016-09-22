<template>
  <div class="container">
    <div class="card-container card">
      <h3 class="login-title">Vue webpack</h3>
      <img id="profile-img"  class="profile-name-card" src="../assets/logo.png">
      <p id="profile-name" class="profile-name-card"></p>
      <form class="form-signin">
        <input class="form-control" placeholder="用户名">
        <input class="form-control" placeholder="密码">
        <button class="btn btn-lg btn-primary btn-block btn-signin">登录</button>
      </form>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import "../assets/less/login.less";
    body{
        background-color:#ff0000;
    }
</style>
<script>
  export default {
    data:{

    },
    methods: {

    }
  }
</script>
