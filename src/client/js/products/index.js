(function () {
    'use strict';

    module.exports = angular.module('m101x.products', [
        require('./services').name,
        require('./directives').name,
        require('./controllers').name
    ]);
})();
