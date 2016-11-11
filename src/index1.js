(function () {
    'use strict';

    var express = require('express'),
        wagner = require('wagner-core');

    require('./model/categoryModel')(wagner);
    var categoryApi = require('./api/categoryApi');

    var app = express();

    app.use('/api/v1', categoryApi(wagner));

    var portToListenTo = 8090;
    app().listen(portToListenTo);
    window.console.log('Listening on port ' + portToListenTo + '...');
})();
