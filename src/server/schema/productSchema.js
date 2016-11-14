(function () {
    'use strict';

    var mongoose = require('mongoose'),
        Category = require('./categorySchema'),
        fx = require('./fx');

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
                required: true,
                set: function (value) {
                    this.internal.approximatePriceUSD = value / fx()[this.price.currency || 1];
                    return value;
                }
            },
            currency: {
                type: String,
                enum: ['USD', 'EUR', 'GBP'],
                required: true
            }
        },
        category: Category.categorySchema,
        internal: {
            approximatePriceUSD: Number
        }
    };

    module.exports = new mongoose.Schema(productSchema);
    module.exports.productSchema = productSchema;
})();
