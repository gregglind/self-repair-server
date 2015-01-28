// Karma configuration
// Generated on Tue Jan 27 2015 14:16:43 GMT-0600 (CST)


/* features of this Karma conf:
- each test is run as a webpack
-
*/
// http://npm.taobao.org/package/istanbul-instrumenter-loader


module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'karma/compiled',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      //{pattern: 'src/*.js', included: false}, // not needed, get wepbacked.
      {pattern: 'test/*.js', included: true}
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'test/*': ['webpack'] // , 'coverage']  // not recursive!
    },

    plugins: [
        //require("karma-webpack")
        'karma-coverage',
        'karma-webpack',
        'karma-mocha',
        'karma-firefox-launcher'
    ],

    traceurPreprocessor: {
      // options passed to the traceur-compiler
      // see traceur --longhelp for list of options
      options: {
        sourceMaps: false,
        modules: 'commonjs' // non default, important to make them webpackable
      },
      // custom filename transformation function
      transformPath: function(path) {
        return path;
        //console.log(path);
        //return path.replace(/\.es6$/, '.js');
      }
    },


    //http://npm.taobao.org/package/istanbul-instrumenter-loader
    webpack: {
      module: {
        //loaders: [ ... ],
        postLoaders: [ { // << add subject as webpack's postloader
          test: /\.js$/,
          exclude: /(test|node_modules|bower_components)\//,
          loader: 'istanbul-instrumenter'
        } ]
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
