const webpack = require('webpack')
const path = require('path')

function resolve(path_) {
  return path.join(__dirname, path_)
}

module.exports = {
  entry: resolve('app.js'),
  output: {
    filename: '[name].js',
    path: resolve('static'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.json', '.css'],
    alias: {
      'assets': resolve('src/assets')
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
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