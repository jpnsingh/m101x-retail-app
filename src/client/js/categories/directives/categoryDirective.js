(function () {
    'use strict';

    module.exports = angular.module('m101x.categories.directives.categoryDirective', [])
        .directive('category', function () {
            return {
                replace: true,
                controller: 'CategoryController',
                template: '' +
                '<div class="category" data-ng-show="category">' +
                '   Showing Category: <strong>{{category._id}}</strong>' +
                '</div>'
            };
        });
})();
