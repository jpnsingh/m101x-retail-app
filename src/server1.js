(function () {
    'use strict';

    var express = require('express'),
        wagner = require('wagner-core');

    require('./server/model/userModel');

    module.exports = function () {
        var app = express();

        var setupApp = function (app, wagner) {
            var userRouteHandler = wagner.invoke(function (UserModel) {
                return function (request, response) {
                    UserModel.findOne({_id: request.params.id}, function (error, user) {
                        response.json({user: user});
                    });
                };
            });

            app.get('/user/:id', userRouteHandler);

            app.get('/', function (request, response) {
                response.send('Hello World from Express!!');
            });
        };

        setupApp(app, wagner);

        return app;
    };
})();
