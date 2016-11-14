(function () {
    'use strict';

    var gulp = require('gulp'),
        jshint = require('gulp-jshint'),
        stylish = require('jshint-stylish');

    module.exports = gulp.task('lint', function () {
        return gulp
            .src('./src/**/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter(stylish));
    });
})();
