(function () {
    'use strict';

    var cfg = require('config');

    var build = {
        root: '.build',
        transpiled: '.transpiled'
    };

    module.exports = {
        module: cfg.app,
        paths: {
            test: './test',
            src: {
                js: './src/client/js/**/*.js',
                templates: './src/client/views/templates/**/*.html',
                browserify: {
                    entry: './' + build.transpiled + '/app.js'
                }
            },
            dest: {
                root: build.root,
                js: build.root + '/' + cfg.app + '/js',
                templates: build.root + '/templates',
                transpiled: build.transpiled
            },
            publish: {
                src: build.root + '**/*',
                dest: '.publish'
            }
        }
    };
})();
