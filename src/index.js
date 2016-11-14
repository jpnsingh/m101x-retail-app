(function () {
    'use strict';

    var server = require('./server1')(),
        port = 8090;

    server.listen(port);
    console.log('Server listening on port %d...', port); // jshint ignore:line
})();
