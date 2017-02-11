const path = require('path');

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.config.base');

module.exports = webpackMerge(baseConfig, {
  devServer: {
    host: '0.0.0.0',
    inline: true,
    historyApiFallback: true,
    stats: {
      colors: true,
      chunks: false,
      hash: false,
      version: false,
      children: false
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'templates/dev-template.html'),
      inject: true
    })
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css!postcss' }
    ]
  },
  vue: {
    loaders: {
      css: 'style!css!postcss'
    }
  },
  responsiveLoader: {
    placeholder: true
  }
})
