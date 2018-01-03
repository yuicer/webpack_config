const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

function resolve(path_) {
  return path.join(__dirname, '../', path_)
}
module.exports = merge(baseWebpackConfig, {
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    publicPath: '/'
    // contentBase: resolve('dist'),
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: resolve('dist/index.html'),
      template: 'index.html',
      inject: true,
    })
  ]
})
