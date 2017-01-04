const glob = require('glob');
const path = require('path');
const fs = require('fs');

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const baseConfig = require('./webpack.config.base');

const renderer = require('vue-server-renderer').createRenderer();
const layoutPath = path.resolve(__dirname, '../source/templates/static-template.html');
const layout = fs.readFileSync(layoutPath, 'utf8')

const paths =
  glob.sync(path.resolve(__dirname, '../source/content/**/*.js'))
    .map(p => p.substr(path.resolve(__dirname, '../source/content/').length + 1))
    .map(p => p.replace('.js', '.html'))
    .map(p => p.indexOf('index.html') === -1 ? p.replace('.html', '') : p)

module.exports = webpackMerge(baseConfig, {
  entry: {
    static: './source/static.js'
  },
  plugins: [
    new StaticSiteGeneratorPlugin('static', paths, { layout, renderer })
  ]
});
