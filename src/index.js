(function () {
    'use strict';

    var server = require('./server');

    server().listen(8090);
    window.console.log('Server listening on port 8090...');
})();
