(function () {
    'use strict';

    var mongoose = require('mongoose'),
        categorySchema = require('../schema/categorySchema');

    module.exports = function (wagner) {
        mongoose.connect('mongodb://localhost:27017/test');

        var CategoryModel = mongoose.model('Category', categorySchema, 'categories');

        wagner.factory('CategoryModel', function () {
            return CategoryModel;
        });

        return {
            CategoryModel: CategoryModel
        };
    };
})();
