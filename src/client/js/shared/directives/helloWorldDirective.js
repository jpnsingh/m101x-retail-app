(function () {
    'use strict';

    module.exports = angular.module('m101x.shared.directives.helloWorldDirective', [])
        .directive('helloWorld', function () {
            return {
                replace: true,
                templateUrl: '/m101x-retail-app/src/client/views/templates/shared/directives/helloWorld.html'
            };
        });
})();
