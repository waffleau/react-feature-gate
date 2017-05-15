const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve('src', 'index.js'),

  externals: {
    react: 'react',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-feature-gate.js',
    library: 'ReactFeatureGate',
    libraryTarget: 'umd',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],

  resolve: {
    extensions: ['.js'],
  },
};
