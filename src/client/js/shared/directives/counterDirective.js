(function () {
    'use strict';

    module.exports = angular.module('m101x.shared.directives.counterDirective', ['ng'])
        .directive('counterDirective', function () {
            return {
                replace: true,
                controller: 'CounterController',
                templateUrl: '/m101x-retail-app/src/client/views/templates/shared/directives/counterDiv.html'
            };
        })
        .controller('CounterController', function ($scope) {
            $scope.counter = 0;
        });
})();
