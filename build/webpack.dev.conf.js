const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const path = require('path')

function resolve(path_) {
  return path.join(__dirname, '../', path_)
}
module.exports = merge(baseWebpackConfig, {
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    contentBase: resolve('dist'),
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
      // 'process.env': {
      //   NODE_ENV: '"development"'
      // }
    }),
  ]
})
