// Karma configuration
// Generated on Tue Jan 27 2015 14:16:43 GMT-0600 (CST)

/**
  *
  * to run:
  * ./node_modules/karma/bin/karma --log-level debug start karma.conf.js
  *
  */

/* features of this Karma conf:
- each test is run as a webpack
- es6 okay in sources and tests
*/


module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'karma',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: 'test/*.js', included: true}
      //{pattern: 'src/*.js', included: false}, // not needed, get wepbacked via tests
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'test/*': ['webpack'] // traceur, coverage handled by webpack.  // not recursive!
    },

    plugins: [
        'karma-coverage',   // for the reporter
        'karma-webpack',
        'karma-mocha',
        'karma-firefox-launcher'
    ],


    webpack: {
      module: {
        postLoaders: [
        /**
          * 1.  instrumement all sources, in original form.
          * 2.  es6 -> es5 all instrumented source AND tests.
          * 3.  webpack each test.  (which bundles in a proper require and main)
          *
          * This allows
          * - writing all sources *and* tests in es6
          * - full coverage
          */
           //http://npm.taobao.org/package/istanbul-instrumenter-loader
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)\//,
          loader: 'istanbul-instrumenter'
        },
        { // << traceur *after* instrumenting
          test: /\.js$/,
          // have to traceur the tests too.
          exclude: /(node_modules|bower_components)\//,
          loader: 'traceur'
        },
        ]
      },
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'dots', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    //


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // coverage report.
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    }
  });
};
