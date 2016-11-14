(function () {
    'use strict';

    var express = require('express'),
        wagner = require('wagner-core');

    var URL_ROOT = 'http://localhost:3000';

    describe('Category API', function () {
        var server,
            Category;

        before(function () {
            var app = express();

            var model = require('../../../src/server/model')(wagner).categoryModel;
            app.use(require('../../../src/server/api')(wagner).categoryApi);

            server = app.listen(3000);

            Category = model.CategoryModel;
        });

        after(function () {
            server.close();
        });

        beforeEach(function (done) {
            Category.remove({}, function (error) {
                assert.ifError(error);
                done();
            });
        });

        it('can load a category by id', function (done) {
            Category.create({_id: 'Electronics'}, function (error, doc) {
                assert.ifError(error);

                var url = URL_ROOT + '/category/id/Electronics';
                superagent.get(url, function (error, response) {
                    assert.ifError(error);
                    var result;

                    assert.doesNotThrow(function () {
                        result = JSON.parse(response.text);
                    });

                    assert.ok(result.category);
                    assert.equal(result.category._id, 'Electronics');
                    done();
                });
            });
        });

        it('can load all the categories that have a certain parent', function (done) {
            var categories = [
                {_id: 'Electronics'},
                {_id: 'Phones', parent: 'Electronics'},
                {_id: 'Laptops', parent: 'Electronics'},
                {_id: 'Bacon'}
            ];

            Category.create(categories, function (error, categories) {
                var url = URL_ROOT + '/category/parent/Electronics';

                superagent(url, function (error, response) {
                    assert.ifError(error);

                    var result;

                    assert.doesNotThrow(function () {
                        result = JSON.parse(response.text);
                    });

                    assert.equal(result.categories.length, 2);
                    assert.equal(result.categories[0]._id, 'Laptops');
                    assert.equal(result.categories[1]._id, 'Phones');

                    done();
                });
            });
        });
    });
})();
