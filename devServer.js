/* eslint-disable */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const port = 8080;
const host = 'localhost';

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
    chunks: false,
    'errors-only': true
  }
}).listen(port, host, function(err) {
  if (err) {
    console.log(err);
  }

  console.log(`Listening at http://${host}:${port}/`);
});
