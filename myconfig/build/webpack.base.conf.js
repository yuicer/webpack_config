const webpack = require('webpack')
const path = require('path')

function resolve(path_) {
  return path.join(__dirname, '../', path_)
}

module.exports = {
  entry: {
    main: resolve('app.js'),
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
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }
    }, {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
      }
    }]
  }
}
