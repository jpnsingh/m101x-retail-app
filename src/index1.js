(function () {
    'use strict';

    var express = require('express'),
        wagner = require('wagner-core');

    require('./model')(wagner);

    var apis = require('./api')(wagner);

    var app = express();

    app.get('/', function (request, response) {
        response.send('Hello World from Express!!');
    });

    app.use('/api', apis.categoryApi);
    app.use('/api', apis.productApi);

    var portToListenTo = 8090;
    app.listen(portToListenTo);
    console.log('Listening on port %d...', portToListenTo); // jshint ignore:line
})();
