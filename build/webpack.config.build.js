const fs = require('fs');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const baseConfig = require('./webpack.config.base');

const renderer = require('vue-server-renderer').createRenderer();
const layout = fs.readFileSync(__dirname + '/../source/templates/index.html', 'utf8')
const paths = [
  'index.html',
  'portfolio/index.html',
  'portfolio/trimet'
];

let config = webpackMerge(baseConfig, {
  entry: {
    bundle: './source/client.js',
    static: './source/static.js'
  },
  plugins: [
    new StaticSiteGeneratorPlugin('static', paths, { layout, renderer })
  ]
});

module.exports = config;
