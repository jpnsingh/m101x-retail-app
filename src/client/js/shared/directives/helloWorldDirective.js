(function () {
    'use strict';

    module.exports = angular.module('m101x.shared.directives.helloWorldDirective', [])
        .directive('helloWorld', function () {
            return {
                replace: true,
                template: '<h2>Hello, World from Angular Directive!!</h2>'
            };
        });
})();
