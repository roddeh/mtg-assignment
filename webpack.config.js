const path = require('path');

const config = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },
  entry: './js/index.js',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'index.bundle.js'
  },
}

module.exports = config