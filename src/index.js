(function () {
    'use strict';

    var server = require('./server1')(),
        config = require('config');

    server.listen(config.port);
    console.log('Server listening on port %d...', config.port); // jshint ignore:line
})();
