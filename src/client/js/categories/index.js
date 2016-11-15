(function () {
    'use strict';

    module.exports = angular.module('m101x.categories', [
        require('./services').name,
        require('./directives').name,
        require('./controllers').name
    ]);
})();
