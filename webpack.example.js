'use strict'

module.exports = {
  entry: './example/index.js',

  devtool: 'inline-source-map',

  eslint: {
    failOnWarning: false,
    failOnError: false
  },

  output: {
    path: './example',
    publicPath: 'example',
    filename: 'example.build.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel', 'eslint'],
        exclude: /node_modules/
      }
    ]
  }
}
