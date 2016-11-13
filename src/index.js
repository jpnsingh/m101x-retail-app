(function () {
    'use strict';

    var server = require('./server')(),
        port = 8090;

    server.listen(port);
    console.log('Server listening on port %d...', port); // jshint ignore:line
})();
