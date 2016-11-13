(function () {
    'use strict';

    var express = require('express'),
        httpStatus = require('http-status');

    module.exports = function (wagner) {
        var api = express.Router();

        function handleOne(property, response, error, result) {
            if (error) {
                return response.status(httpStatus.INTERNAL_SERVER_ERROR).json({error: error.toString()});
            }
            if (!result) {
                response.status(httpStatus.NOT_FOUND).json({error: 'Not found'});
            }

            var json = {};

            json[property] = result;

            return response.json(json);
        }

        function handleMany(property, response, error, result) {
            if (error) {
                return response.status(httpStatus.INTERNAL_SERVER_ERROR).json({error: error.toString()});
            }
            if (!result) {
                response.status(httpStatus.NOT_FOUND).json({error: 'Not found'});
            }

            var json = {};

            json[property] = result;

            return response.json(json);
        }

        api.get('/product/id/:id', wagner.invoke(function (ProductModel) {
            return function (request, response) {
                ProductModel.findOne({_id: request.params.id}, handleOne.bind(null, 'product', response));
            };
        }));

        api.get('/product/category/:id', wagner.invoke(function (ProductModel) {
            return function (request, response) {
                var sort = {name: 1};
                if (request.query.price === '1') {
                    sort = {'internal.approximatePriceUSD': 1};
                } else if (request.query.price === '-1') {
                    sort = {'internal.approximatePriceUSD': -1};
                }

                ProductModel
                    .find({'category.ancestors': request.params.id})
                    .sort(sort)
                    .exec(handleMany.bind(null, 'products', response));
            };
        }));

        return api;
    };
})();
