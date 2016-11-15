(function () {
    'use strict';

    module.exports = function (config) {
        config.set({
            files: [
                // Libraries
                '../libs/lodash.min.js',
                '../libs/jquery.min.js',
                '../libs/angular.min.js',
                '../libs/angular-mocks.js',
                '../libs/angular-strap.min.js',
                '../libs/angular-ui-router.min.js',
                // '../libs/jasmine-mox-matchers.min.js',
                '../node_modules/bardjs/dist/bard.js',

                // Sources
                '../src/client/js/directives/counterDirective.js',

                // Tests
                '../test/spec/client/js/directives/counterDirectiveSpec.js'
            ],
            exclude: [],
            frameworks: [
                'mocha',
                'chai'
            ],
            browsers: [
                'Chrome'
            ]
        });
    };
})();
