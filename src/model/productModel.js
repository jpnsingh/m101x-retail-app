(function () {
    'use strict';

    var mongoose = require('mongoose'),
        productSchema = require('../schema/productSchema'),
        wagner = require('wagner-core');

    mongoose.connect('mongodb://localhost:27017/test');

    var ProductModel = mongoose.model('Product', productSchema, 'products');

    wagner.factory('ProductModel', function () {
        return ProductModel;
    });

    return {
        ProductModel: ProductModel
    };
})();
