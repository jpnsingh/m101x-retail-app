(function () {
    'use strict';

    module.exports = angular.module('m101x.shared.constants.apiConstants', [])
        .constant('apiConstants', {
            product_api: '/api/product/id/:id',
            product_by_category_api: '/api/product/category/:id',
            category_api: '/api/category/id/:id',
            category_by_parent_api: '/api/category/parent/:id',
        });
})();
