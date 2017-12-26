const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

function resolve(path_) {
  return path.join(__dirname, '../', path_)
}

module.exports = {
  entry: {
    main: resolve('app.js'),
    a: resolve('a.js')
  },
  output: {
    filename: '[name].js',
    path: resolve('dist/static'),
    publicPath: './static/'
  },
  resolve: {
    extensions: ['.js', '.json', '.css'],
    alias: {
      'assets': resolve('src/assets')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: resolve('dist/index.html'),
      template: 'index.html',
      inject: true,
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: resolve('dist/a.html'),
      template: 'a.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      chunks: ['a']
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      include: resolve('src'),
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }
    }]
  }
}
