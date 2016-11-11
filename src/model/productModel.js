(function () {
    'use strict';

    var mongoose = require('mongoose'),
        productSchema = require('../schema/productSchema'),
        wagner = require('wagner-core'),
        util = require('util');

    mongoose.connect('mongodb://localhost:27017/test');

    var ProductModel = mongoose.model('Product', productSchema);

    wagner.factory('ProductModel', function () {
        return ProductModel
    });

    // myUserFunction(Product);
    //
    // function myUserFunction(Product) {
    //     Product.create({name: 'iPhone'}, function (error, doc) {
    //         console.log(util.inspect(doc));
    //     });
    // }
})();
