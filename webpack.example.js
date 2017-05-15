const webpack = require('webpack');

module.exports = {
  entry: './example/index.js',

  devtool: 'source-map',

  output: {
    path: '/example',
    publicPath: 'example',
    filename: 'example.build.js',
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
    new webpack.LoaderOptionsPlugin({
      eslint: {
        failOnWarning: false,
        failOnError: false,
      },
    }),
  ],
};
