'use strict';

let path = require('path');
let express = require('express');
let webpack = require('webpack');
let config = require('./webpack.config.dev');
let index = require('fs').readFileSync(path.join(__dirname, '/index.html'), 'utf8');
let indexjs = require('fs').readFileSync(path.join(__dirname, '/index.js'), 'utf8');

process.on('uncaughtException', function(err) {
  console.log('Caught exception: ' + err);
});

let app = express();
let compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/:var(index.htm|index.html|cv|cv.html)?', function(req, res) {
  res.send(index);
});

app.get('/index.js', function(req, res) {
  res.send(indexjs);
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
