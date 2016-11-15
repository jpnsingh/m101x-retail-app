(function () {
    'use strict';

    module.exports = angular.module('m101x.categories.controllers.categoryController', [])
        .controller('CategoryController', function ($scope, CategoryService) {
            CategoryService
                .getCategory('Electronics')
                .success(function (data) {
                    $scope.category = data.category;
                });

            setTimeout(function () {
                $scope.$emit('CategoryController');
            }, 0);
        });
})();
