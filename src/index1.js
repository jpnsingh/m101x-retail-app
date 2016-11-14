(function () {
    'use strict';

    var express = require('express'),
        wagner = require('wagner-core'),
        gulpConfig = require('../gulp/config');

    require('./server/model')(wagner);

    var apis = require('./server/api')(wagner);

    var app = express();

    app.get('/', function (request, response) {
        response.send('Hello World from Express!!');
    });

    app.use('/api', apis.categoryApi);
    app.use('/api', apis.productApi);

    app.listen(gulpConfig.port.dev);
    console.log('Listening on port %d...', gulpConfig.port.dev); // jshint ignore:line
})();
