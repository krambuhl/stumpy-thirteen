const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    client: './source/client.js'
  },
  publicPath: './dist/',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '/assets/[name].js',
    libraryTarget: 'umd'
  },
  devtools: 'source-map',
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      Content: path.resolve(__dirname, '..', 'source/content'),
      Templates: path.resolve(__dirname, '..', 'source/templates'),
      Tags: path.resolve(__dirname, '..', 'source/tags'),
    },
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/, loader: 'babel?cacheDirectory=true', exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css') },
      { test: /\.md$/, loader: 'html!markdown' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'responsive?name=/assets/images/[name]-[md5:hash:hex:8].',
          'file?context=./source/&name=/assets/images/[name]-[md5:hash:hex:8].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('/assets/[name].css')
  ],
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract('css')
    }
  }
}
