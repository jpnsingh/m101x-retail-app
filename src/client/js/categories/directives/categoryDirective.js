(function () {
    'use strict';

    module.exports = angular.module('m101x.categories.directives.categoryDirective', [])
        .directive('category', function () {
            return {
                replace: true,
                controller: 'CategoryController',
                templateUrl: '/m101x-retail-app/src/client/views/templates/categories/directives/category.html'
            };
        });
})();
