(function () {
    'use strict';

    var cfg = require('config');

    var build = {
        root: '.build',
        transpiled: '.transpiled'
    };

    module.exports = {
        paths: {
            test: './test',
            src: {
                js: './src/client/js/**/*.js',
                browserify: {
                    entry: './' + build.transpiled + '/app.js'
                }
            },
            dest: {
                root: build.root,
                js: build.root + '/' + cfg.app + '/js',
                transpiled: build.transpiled
            },
            publish: {
                src: build.root + '**/*',
                dest: '.publish'
            }
        }
    };
})();
