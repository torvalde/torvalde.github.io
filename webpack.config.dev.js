var path = require('path');
var webpack = require('webpack');

var rebeccaPurple = require('postcss-color-rebeccapurple');
var cssVariables = require('postcss-css-variables');
var cssNested = require('postcss-nested');
var cssExtend = require('postcss-extend');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
    ,devtoolModuleFilenameTemplate: 'webpack:///[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: 'webpack:///[resourcePath]?[hash]'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.resolve(__dirname, '/'),
        exclude: [/test/,/node_modules/]
      },
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  postcss: [
    rebeccaPurple,
    cssVariables,
    cssNested,
    cssExtend,
    autoprefixer
  ]
};
