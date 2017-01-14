const path = require('path');

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.config.base');

module.exports = webpackMerge(baseConfig, {
  devServer: {
    inline: true,
    historyApiFallback: true
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
  }
})
