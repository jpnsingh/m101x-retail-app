(function () {
    'use strict';

    module.exports = angular.module('m101x', [
        'ng',
        require('./categories').name,
        require('./services').name,
        require('./directives').name,
        require('./controllers').name
    ]);
})();
