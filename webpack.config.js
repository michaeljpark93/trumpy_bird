const path = require('path');

module.exports = {
  context: __dirname,
  entry: './lib/flappy_trump.js',
  output: {
    filename: 'bundle.js'
  },
  devtool: 'source-map'
};
