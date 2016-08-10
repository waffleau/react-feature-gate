'use strict'

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: path.resolve('src', 'index.js'),

  externals: {
    'react': 'react'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-feature-gate.js',
    library: 'ReactFeatureGate',
    libraryTarget: 'umd'

  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel', 'eslint'],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],

  resolve: {
    extensions: ['', '.js']
  }
}
