// Karma configuration
var path = require('path');
var webpack = require('webpack');

var rebeccaPurple = require('postcss-color-rebeccapurple');
var cssVariables = require('postcss-css-variables');
var cssNested = require('postcss-nested');
var cssExtend = require('postcss-extend');
var autoprefixer = require('autoprefixer');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '.',

    files: [
      'tests.webpack.js'
    ],
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'mocha',
      'chai-as-promised',
      'sinon-chai'
    ],

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],

    // webpack config object
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            loaders: ['babel'],
            include: [
              path.resolve(__dirname, "src/js")
            ]
          },
          { test: /\.css$/, loader: "style-loader!css-loader!postcss-loader" },
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
    },
    webpackMiddleware: {
      noInfo: true
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'Chrome'
    ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
