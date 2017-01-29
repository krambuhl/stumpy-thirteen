const glob = require('glob');
const path = require('path');
const fs = require('fs');

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const baseConfig = require('./webpack.config.base');

// templating files
const layoutPath = path.resolve(__dirname, 'templates/static-template.html');
const layout = fs.readFileSync(layoutPath, 'utf8')
const renderer = require('vue-server-renderer').createRenderer();

const paths =
  glob.sync(path.resolve(__dirname, '../source/content/**/*.vue'))
    .map(p => p.substr(path.resolve(__dirname, '../source/content/').length + 1))
    .map(p => p.replace('.vue', '.html'))
    .map(p => p.indexOf('index.html') === -1 ? p.replace('.html', '') : p)

module.exports = webpackMerge(baseConfig, {
  stats: {
    colors: true,
    children: false
  },
  entry: {
    static: './source/static.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css!postcss') },
      { test: /\.(jpe?g|png)$/i,
        loaders: [
          'responsive?name=/assets/images/[name]-[md5:hash:hex:8].',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      { test: /\.gif$/i,
        loaders: [
          'file?context=./source/&name=/assets/images/[name]-[md5:hash:hex:8].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
    ]
  },
  plugins: [
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, 'assets/favicon.png'),
      prefix: '/assets/favicons/',
      persistentCache: true,
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: true,
        twitter: true,
        yandex: false,
        windows: false
      }
    }),
    new StaticSiteGeneratorPlugin('static', paths, { layout, renderer }),
    new ExtractTextPlugin('/assets/[name].css')
  ],

  vue: {
    loaders: {
      css: ExtractTextPlugin.extract('css!postcss')
    }
  },
  responsiveLoader: {
    placeholder: true
  }
});
