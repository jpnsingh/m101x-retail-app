(function () {
    'use strict';

    var mongoose = require('mongoose'),
        categorySchema = require('../schema/categorySchema'),
        wagner = require('wagner-core'),
        util = require('util');

    mongoose.connect('mongodb://localhost:27017/test');

    var CategoryModel = mongoose.model('Category', categorySchema);

    wagner.factory('CategoryModel', function () {
        return CategoryModel
    });

    // myFunction(Category);
    //
    // function myFunction(Category) {
    //     Category.create({name: 'Electronics'}, function (error, doc) {
    //         console.log(util.inspect(doc));
    //     });
    // }
})();
