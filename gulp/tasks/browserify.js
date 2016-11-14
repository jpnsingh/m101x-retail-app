(function () {
    'use strict';

    var gulp = require('gulp'),
        browserify = require('gulp-browserify'),
        gulpConfig = require('../config');

    module.exports = gulp.task('browserify', function () {
        return gulp
            .src(gulpConfig.paths.src.js + '/index.js')
            .pipe(browserify())
            .pipe(gulp.dest(gulpConfig.paths.dest.js));
    });
})();
