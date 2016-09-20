var webpack = require('webpack');
var webpackConfig = require('./base');
var config = require('../config');
webpackConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  })
);

webpackConfig.devtool = '#cheap-source-map';

webpackConfig.devServer = {
  port: 3000,
  proxy: [
    {
      context: ['/user', '/auth' ],
      target: 'http://127.0.0.1:8080',
      secure: false,
      changeOrigin: true
    }
  ]
};

module.exports = webpackConfig
