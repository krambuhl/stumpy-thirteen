const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    bundle: './source/client.js',
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
      { test: /\.(jsx|js)$/, loader: 'babel?cacheDirectory=true', exclude: /node_modules/ },
      { test: /\.md$/, loader: 'html!markdown' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?context=./source/&name=/assets/images/[name]-[md5:hash:hex:8].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract('css')
    }
  },
  plugins: [
    new ExtractTextPlugin('/assets/bundle.css')
  ]
}
