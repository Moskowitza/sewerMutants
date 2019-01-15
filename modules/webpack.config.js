const path = require('path');

module.exports = {
  entry: './js/dom.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
  },
  mode: 'development',
};
