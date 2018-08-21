const path = require('path');

module.exports = {
  context: __dirname,
  entry: './lib/lights.js',
  output: {
    filename: 'bundle.js'
  },
  devtool: 'source-map'
};
