'use strict';
var webpack = require('webpack');
var path = require('path');

var config = {
  entry: './lib/client/index.jsx',
  output: {
    path: path.join(__dirname, 'public/build'),
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel?optional=runtime'
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    // don't emit a broken build when errors occur
    new webpack.NoErrorsPlugin(),

    // polyfill fetch
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  // disable sourcemaps in production
  delete config.devtool;

  // optimize in production
  config.plugins = config.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({ mangle: false }),
    new webpack.optimize.DedupePlugin()
  ]);
}

module.exports = config;
