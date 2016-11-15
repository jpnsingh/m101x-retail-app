(function () {
    'use strict';

    module.exports = angular.module('m101x.directives', [
        require('./counterDirective').name,
        require('./helloWorldDirective').name
    ]);
})();
