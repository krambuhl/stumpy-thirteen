const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.build');

module.exports = webpackMerge(baseConfig, {
  responsiveLoader: {
    placeholder: true,
    sizes: [720, 1280, 1920]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  postcss: () => [
    ...baseConfig.postcss(),
    require('cssnano')
  ]
})
