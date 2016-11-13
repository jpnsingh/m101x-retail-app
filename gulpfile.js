(function () {
    var gulp = require('gulp'),
        mocha = require('gulp-mocha'),
        jshint = require('gulp-jshint'),
        stylish = require('jshint-stylish');

    gulp.task('lint', function () {
        gulp
            .src('./src/**/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter(stylish));
    });

    gulp.task('test', function () {
        gulp
            .src('./test/**/*.js')
            .pipe(mocha())
            .on('error', function (err) {
                this.emit('end');
            });
    });

    gulp.task('watch', function () {
        gulp
            .watch('./src/*.js', ['test']);
    });
})();
