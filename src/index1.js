(function () {
    'use strict';

    var express = require('express'),
        wagner = require('wagner-core'),
        config = require('config');

    require('./server/model')(wagner);

    var apis = require('./server/api')(wagner);

    var app = express();

    app.get('/', function (request, response) {
        response.send('Hello World from Express!!');
    });

    app.use('/api', apis.categoryApi);
    app.use('/api', apis.productApi);

    app.listen(config.port);
    console.log('Listening on port %d...', config.port); // jshint ignore:line
})();
