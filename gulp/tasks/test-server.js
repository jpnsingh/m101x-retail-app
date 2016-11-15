(function () {
    'use strict';

    var gulp = require('gulp'),
        mocha = require('gulp-mocha');

    module.exports = gulp.task('test-server', function () {
        return gulp
            .src('./test/**/*.js')
            .pipe(mocha())
            .on('error', function (err) {
                this.emit('end');
            });
    });
})();
