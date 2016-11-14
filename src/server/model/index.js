(function () {
    'use strict';

    var mongoose = require('mongoose');

    module.exports = function (wagner) {
        mongoose.connect('mongodb://localhost:27017/test');

        return {
            userModel: require('./userModel')(mongoose, wagner),
            categoryModel: require('./categoryModel')(mongoose, wagner),
            productModel: require('./productModel')(mongoose, wagner)
        };
    };
})();
