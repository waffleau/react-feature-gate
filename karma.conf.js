const webpackConfig = require('./webpack.build')

module.exports = (config) => {
  config.set({

    browsers: ['jsdom'],

    frameworks: [
      'chai',
      'mocha',
      'sinon'
    ],

    files: [
      'src/*.spec.js'
    ],

    preprocessors: {
      'src/*.spec.js': ['webpack', 'sourcemap']
    },

    reporters: ['dots'],  // progress, coverage, html

    webpack: {
      devtool: 'inline-source-map',

      externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'react/addons': true
      },

      module: webpackConfig.module
    },

    webpackServer: {
      noInfo: true
    }

  })
}
