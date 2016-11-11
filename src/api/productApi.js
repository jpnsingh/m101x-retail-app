(function () {
    'use strict';

    var express = require('express');
    var httpStatus = require('http-status');

    module.exports = function (wagner) {
        var api = express.Router();

        api.get('/product/id/:id', wagner.invoke(function (ProductModel) {
            return function (request, response) {
                ProductModel.findOne({_id: request.params.id}, function (error, product) {
                    if (error) {
                        return response.status(httpStatus.INTERNAL_SERVER_ERROR).json({error: error.toString()});
                    }
                    if (!product) {
                        return response.status(httpStatus.NOT_FOUND).json({error: 'Not found'});
                    }

                    response.json({product: product});
                });
            };
        }));

        return api;
    };
})();
