(function () {
    'use strict';

    var gulp = require('gulp'),
        config = require('../config'),
        karma = require('karma').server,
        path = require('path');

    module.exports = gulp.task('test-client', function (done) {
        var fullPath = path.resolve(config.paths.test + '/karma.conf.js');
        karma.start({configFile: fullPath, singleRun: true}, done);
    });
})();
