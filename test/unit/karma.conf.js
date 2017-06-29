const webpackTestConfig = require('../../webpack/test.conf')

module.exports = (config) => {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha'],
    files: [
      'specs/**/*.js'
    ],
    preprocessors: {
      '**/*.js': ['webpack']
    },
    plugins: ['karma-mocha', 'karma-webpack', 'karma-phantomjs-launcher'],
    webpack: webpackTestConfig,
    webpackMiddleware: {
    }
  })
}
