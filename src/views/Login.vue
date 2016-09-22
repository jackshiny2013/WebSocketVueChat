<template>
  <div class="container">
    <div class="card card-container">
      <h3 class="login-title">Vue webpack</h3>
      <img id="profile-img"  class="profile-name-card" src="../assets/logo.png">
      <p id="profile-name" class="profile-name-card"></p>
      <form class="form-signin">
        <input class="username-input" placeholder="用户名">
        <input class="password-input" placeholder="密码">
        <button class="login-btn">登录</button>
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
</script>
