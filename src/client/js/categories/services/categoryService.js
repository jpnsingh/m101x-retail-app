(function () {
    'use strict';

    module.exports = angular.module('m101x.categories.services.categoryService', [])
        .service('CategoryService', function ($http, apiConstants) {
            let self = this;

            self.getCategory = function (id) {
                return $http
                    .get(apiConstants.category_api.replace(':id', id))
                    .success(function (response) {
                        return response.data;
                    });
            };
        });
})();
