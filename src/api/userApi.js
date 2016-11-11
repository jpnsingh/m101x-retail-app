(function () {
    'use strict';

    var express = require('express');
    var httpStatus = require('http-status');

    module.exports = function (wagner) {
        var api = express.Router();

        api.get('/user/:id', wagner.invoke(function (User) {
            return function (request, response) {
                User.findOne({_id: request.params.id}, function (error, user) {
                    if (error) {
                        return response.status(httpStatus.INTERNAL_SERVER_ERROR).json({error: error.toString()});
                    }
                    if (!user) {
                        return response.status(httpStatus.NOT_FOUND).json({error: 'Not found'});
                    }

                    response.json({user: user});
                });
            };
        }));
    };
})();
