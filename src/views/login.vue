<template>
  <div class="container">
    <div class="card-container card">
      <h3 class="login-title">Vue webpack</h3>
      <img id="profile-img"  class="profile-name-card" src="../assets/logo.png">
      <p id="profile-name" class="profile-name-card"></p>
      <form class="form-signin" @submit="login()">
        <input class="form-control" placeholder="用户名">
        <input class="form-control" placeholder="密码">
        <input class="form-control" type="submit">
      </form>
      <button @click="login()">clik</button>
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
  import { localLogin } from '../vuex/actions';
  var $ = require('jquery');

  export default {
    data:{

    },
    vuex: {
      getters: {

      },
      actions: {
        localLogin
      }
    },
    methods: {
      login(){
        $.ajax({
          type:'post',
          url:'https://localhost/script/login.esp',
          data:{account:'admin',password:'OGM2OTc2ZTViNTQxMDQxNWJkZTkwOGJkNGRlZTE1ZGZiMTY3YTljODczZmM0YmI4YTgxZjZmMmFi NDQ4YTkxOA==',domain:'local'},
          dataType:'jsonp',
          success:function (res) {
            self.$route.router.go('/main');
          },
          error:function (res) {
            console.log(res);
          }
        })



//        this.localLogin();




      }
    }
  }
</script>
