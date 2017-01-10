const glob = require('glob');
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const baseConfig = require('./webpack.config.base');

// templating files
const layoutPath = path.resolve(__dirname, 'templates/static-template.html');
const layout = fs.readFileSync(layoutPath, 'utf8')
const renderer = require('vue-server-renderer').createRenderer();

const paths =
  glob.sync(path.resolve(__dirname, '../source/content/**/*.vue'))
    .map(p => p.substr(path.resolve(__dirname, '../source/content/').length + 1))
    .map(p => p.replace('.js', '.html'))
    .map(p => p.indexOf('index.html') === -1 ? p.replace('.html', '') : p)

module.exports = webpackMerge(baseConfig, {
  entry: {
    static: './source/static.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css') },
    ]
  },
  plugins: [
    new StaticSiteGeneratorPlugin('static', ['index.html'], { layout, renderer }),
    new ExtractTextPlugin('/assets/[name].css')
  ],
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract('css')
    }
  }
});
