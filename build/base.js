var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var StringReplacePlugin = require('string-replace-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: './dist',
    filename: '[name].js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve('./'),
      verbose: true
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: false,
      inject: 'body'
    }),
    new StringReplacePlugin()
  ],
  module: {
    loaders: require('./loaders')
  },
  babel: {
    presets: ['es2015', 'stage-2'],
    plugins: ['transform-runtime']
  },
  resolve: {
    extensions: ['', '.js', '.json', '.vue', '.scss', '.css'],
    alias: {
  }
}
}
