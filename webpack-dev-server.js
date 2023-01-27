const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const config = require('./webpack.config.js');
webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(3000, 'localhost', () => {
  console.log('dev server listening on port 3000');
});