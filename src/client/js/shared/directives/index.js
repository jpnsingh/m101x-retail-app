(function () {
    'use strict';

    module.exports = angular.module('m101x.shared.directives', [
        require('./counterDirective').name,
        require('./helloWorldDirective').name
    ]);
})();
