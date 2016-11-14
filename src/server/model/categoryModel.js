(function () {
    'use strict';

    var categorySchema = require('../schema/categorySchema');

    module.exports = function (mongoose, wagner) {
        var CategoryModel = mongoose.model('Category', categorySchema, 'categories');

        wagner.factory('CategoryModel', function () {
            return CategoryModel;
        });

        return {
            CategoryModel: CategoryModel
        };
    };
})();
