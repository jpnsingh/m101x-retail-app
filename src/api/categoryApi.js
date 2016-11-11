(function () {
    'use strict';

    var express = require('express');
    var httpStatus = require('http-status');

    module.exports = function (wagner) {
        var api = express.Router();

        api.get('/category/id/:id', wagner.invoke(function (Category) {
            return function (request, response) {
                Category.findOne({_id: request.params.id}, function (error, category) {
                    if (error) {
                        return response.status(httpStatus.INTERNAL_SERVER_ERROR).json({error: error.toString()});
                    }
                    if (!category) {
                        return response.status(httpStatus.NOT_FOUND).json({error: 'Not found'});
                    }

                    response.json({category: category});
                });
            };
        }));
    };
})();
