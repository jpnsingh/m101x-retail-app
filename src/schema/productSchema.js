(function () {
    'use strict';

    var mongoose = require('mongoose'),
        Category = require('./categorySchema');

    var productSchema = {
        name: {
            type: String,
            required: true
        },
        pictures: [
            {
                type: String,
                match: /^http:\/\//i
            }
        ],
        price: {
            amount: {
                type: Number,
                required: true
            },
            currency: {
                type: String,
                enum: ['USD', 'EUR', 'GBP'],
                required: true
            }
        },
        category: Category.categorySchema
    };

    module.exports = new mongoose.Schema(productSchema);
    module.exports.productSchema = productSchema;
})();
