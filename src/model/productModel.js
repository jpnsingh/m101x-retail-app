(function () {
    'use strict';

    var mongoose = require('mongoose'),
        productSchema = require('../schema/product'),
        wagner = require('wagner-core'),
        util = require('util');

    mongoose.connect('mongodb://localhost:27017/test');

    var Product = mongoose.model('Product', productSchema);

    wagner.factory('Product', function () {
        return Product
    });

    // myUserFunction(Product);
    //
    // function myUserFunction(Product) {
    //     Product.create({name: 'iPhone'}, function (error, doc) {
    //         console.log(util.inspect(doc));
    //     });
    // }
})();
