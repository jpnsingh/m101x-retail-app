(function () {
    'use strict';

    var mongoose = require('mongoose'),
        categorySchema = require('../schema/category'),
        wagner = require('wagner-core'),
        util = require('util');

    mongoose.connect('mongodb://localhost:27017/test');

    var Category = mongoose.model('Category', categorySchema);

    wagner.factory('Category', function () {
        return Category
    });

    // myFunction(Category);
    //
    // function myFunction(Category) {
    //     Category.create({name: 'Electronics'}, function (error, doc) {
    //         console.log(util.inspect(doc));
    //     });
    // }
})();
