(function () {
    'use strict';

    var productSchema = require('../schema/productSchema');

    module.exports = function (mongoose, wagner) {
        var ProductModel = mongoose.model('Product', productSchema, 'products');

        wagner.factory('ProductModel', function () {
            return ProductModel;
        });

        return {
            ProductModel: ProductModel
        };
    };
})();
