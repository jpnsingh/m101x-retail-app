(function () {
    'use strict';

    var gulpUtil = require('gulp-util'),
        cgf = require('config'),
        path = require('path');

    module.exports = {
        port: {
            dev: 8090,
            test: 3000
        },
        paths: {
            src: {},
            dest: {},
            publish: {}
        }
    };
})();
