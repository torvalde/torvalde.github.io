var path = require('path');
var webpack = require('webpack');

var rebeccaPurple = require('postcss-color-rebeccapurple');
var cssVariables = require('postcss-css-variables');
var cssNested = require('postcss-nested');
var cssExtend = require('postcss-extend');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.resolve(__dirname, "/"),
      exclude: [/test/,/node_modules/]
    },
      { test: /\.css$/, loader: "style-loader!css-loader!postcss-loader" },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }]
  },
  postcss: [
    rebeccaPurple,
    cssVariables,
    cssNested,
    cssExtend,
    autoprefixer
  ]
};
