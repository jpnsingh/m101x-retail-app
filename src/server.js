(function () {
    'use strict';

    var express = require('express');

    module.exports = function () {
        var app = express();

        app.get('/', function (request, response) {
            response.send('Hello World from Express!!');
        });

        app.get('/user/:user', function (request, response) {
            response.send('Page for user ' + request.params.user + ' with option ' + request.query.option);
        });

        return app;
    }
})();
