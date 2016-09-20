
var path = require('path');

module.exports = {
  name: 'ws',
  localhost: '127.0.0.1', //本地部署
  port: 8080, //本地部署backend server
  webpackDevServerPort: 3000, //开发 webpack hot reload server

  // mongodb 配置
  mongoDB: {
    host: "127.0.0.1",
    database: "wschat",
    userid: "jack",
    password: "123",
    port: 27017
  },


  //session设置
  session_secret: 'secret', // session密匙
  session_collection: 'collect', // 存放session的collection
  cookie_secret: 'cookie_secret', // session密匙
  auth_cookie_name: 'cookie', //cookie名称

  //用户角色种类
  userRoles: ['user', 'admin'],

  // redis 配置
  redisConfig: {
    host: '127.0.0.1',
    port: '6379',
    pass: 'adminadmin'
  },


};
