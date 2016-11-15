(function () {
    'use strict';

    var cfg = require('config');

    var build = {
        root: '.build'
    };

    module.exports = {
        paths: {
            test: './test',
            src: {
                js: './src/client/js'
            },
            dest: {
                root: build.root,
                js: build.root + '/' + cfg.app + '/js'
            },
            publish: {
                src: build.root + '**/*',
                dest: '.publish'
            }
        }
    };
})();
