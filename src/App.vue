<!--<script>-->
  <!--import { actions } from './store';-->

<!--//  import Card from 'views/card.vue';-->
<!--//  import List from 'components/list';-->
<!--//  import Text from 'components/text';-->
<!--//  import Message from 'components/message';-->

  <!--export default {-->
    <!--components: {-->
      <!--Card: require('./views/card.vue')-->
    <!--},-->
    <!--vuex: {-->
      <!--actions: actions-->
    <!--}-->
  <!--}-->
<!--</script>-->



<template>
  <div id="app">
    <div class="sidebar">
      <card></card>
      <list></list>
    </div>
    <div class="main">
      <message></message>
      <text></text>
    </div>
  </div>
</template>

<style lang="less" scoped>
  #app {
    margin: 20px auto;
    width: 800px;
    height: 600px;

    overflow: hidden;
    border-radius: 3px;

  .sidebar, .main {
    height: 100%;
  }
  .sidebar {
    float: left;
    width: 200px;
    color: #f4f4f4;
    background-color: #2e3238;
  }
  .main {
    position: relative;
    overflow: hidden;
    background-color: #eee;
  }
  .text {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }
  .message {
    height: ~'calc(100% - 160px)';
  }
  }
</style>


<script>
  import store from './store'
  import card from './components/card.vue'
  export  default{
    components: {
      card
    },
    store: store
  }
</script>
