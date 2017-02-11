const webpack = require('webpack');
const path = require('path');

const SvgStorePlugin = require('webpack-svgstore-plugin');

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
      Vars: path.resolve(__dirname, '..', 'source/variables'),
      Utils: path.resolve(__dirname, '..', 'source/utils'),
      Content: path.resolve(__dirname, '..', 'source/content'),
      Components: path.resolve(__dirname, '..', 'source/components'),
      Tags: path.resolve(__dirname, '..', 'source/tags'),
      'data/npm': path.resolve(__dirname, 'data/npm-data.json'),
      'data/github': path.resolve(__dirname, 'data/github-data.json'),
    },
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/, loader: 'babel?cacheDirectory=true', exclude: /node_modules/ },
      { test: /\.md$/, loader: 'html!markdown' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.svg$/i,
        loaders: [
          'file?context=./source/&name=/assets/svgs/[name]-[md5:hash:hex:8].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      { test: /\.gif$/i,
        loaders: [
          'file?context=./source/&name=/assets/images/[name]-[md5:hash:hex:8].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      { test: /\.(jpe?g|png)$/i,
        loaders: [
          'responsive?name=/assets/images/[name]-[md5:hash:hex:8].',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  plugins: [
    new SvgStorePlugin()
  ],
  postcss: () => [
    require('postcss-cssnext')({
      warnForDuplicates: false,
      features: {
        customProperties: {
          variables: Object.assign(
            {},
            require(path.resolve(__dirname, '..', 'source/variables/colors')),
            require(path.resolve(__dirname, '..', 'source/variables/sizes'))
          )
        },
        customMedia: {
          extensions: require(path.resolve(__dirname, '..', 'source/variables/media'))
        }
      }
    })
  ]
}
