(function () {
    'use strict';

    var cfg = require('config');

    var build = {
        root: '.build'
    };

    module.exports = {
        paths: {
            src: {
                js: './src/client/js'
            },
            dest: {
                js: build.root + '/' + cfg.app + '/js'
            },
            publish: {
                src: build.root + '**/*',
                dest: '.publish'
            }
        }
    };
})();
