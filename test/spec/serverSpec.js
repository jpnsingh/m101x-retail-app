(function () {
    'use strict';

    var superagent = require('superagent'),
        assert = require('assert'),
        app = require('../../src/server');

    // require('../src/model/userModel');

    describe('server', function () {

        var server;

        beforeEach(function () {
            server = app().listen(3000);
        });

        afterEach(function () {
            server.close();
        });

        it('Prints out Hello World for / route', function (done) {
            superagent.get('http://localhost:3000/', function (error, response) {
                assert.ifError(error);
                assert.equal(response.status, 200);
                assert.equal(response.text, 'Hello World from Express!!');
                done();
            });
        });
    });
})();
