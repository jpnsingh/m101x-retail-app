(function () {
    'use strict';

    module.exports = angular.module('m101x.directives.counterDirective', ['ng'])
        .directive('counterDirective', function () {
            return {
                replace: true,
                controller: 'CounterController',
                template: '<div data-ng-click="counter = counter + 1">' +
                'You\'ve clicked this div <strong>{{counter}}</strong> times.' +
                '</div>'
            };
        })
        .controller('CounterController', function ($scope) {
            $scope.counter = 0;
        });
})();
