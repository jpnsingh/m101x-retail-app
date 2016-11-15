(function () {
    'use strict';

    module.exports = angular.module('m101x.categories.services.categoryService', [])
        .service('CategoryService', function ($http) {
            var self = this;

            self.getCategory = function (id) {
                return $http
                    .get('/api/category/id/:id'.replace(':id', id))
                    .success(function (response) {
                        return response.data;
                    });
            };
        });
})();
