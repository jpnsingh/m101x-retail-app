(function () {
    'use strict';

    module.exports = angular.module('m101x.controllers.counterController', [])
        .controller('CounterController', function ($scope) {
            $scope.counter = 0;
        });
})();
