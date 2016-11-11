(function () {
    'use strict';

    var superagent = require('superagent');
    var assert = require('assert');
    var app = require('../../src/server');

    describe('server', function () {

        var server;

        beforeEach(function () {
            server = app().listen(8090);
        });

        afterEach(function () {
            server.close();
        });

        it('Prints out Hello World for / route', function (done) {
            superagent.get('http://localhost:8090/', function (error, response) {
                assert.ifError(error);
                assert.equal(response.status, 200);
                assert.equal(response.text, 'Hello World from Express!!');
                done();
            });
        });
    });
})();
