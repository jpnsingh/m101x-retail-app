(function () {
    'use strict';

    var injector,
        element,
        scope,
        compiler,
        httpBackend;

    beforeEach(function () {
        injector = angular.injector(['m101x', 'ngMockE2E']);

        injector.invoke(function ($rootScope, $compile, $httpBackend) {
            scope = $rootScope.$new();
            compiler = $compile;
            httpBackend = $httpBackend;
        });
    });

    it('should fetch the category by id', function (done) {
        httpBackend.whenGET('/m101x-retail-app/src/client/views/templates/categories/directives/category.html').passThrough();
        httpBackend.expectGET('/api/category/id/Electronics').respond({
            category: {_id: 'Electronics', ancestors: []}
        });

        element = compiler('<category></category>')(scope);
        scope.$apply();

        scope.$on('CategoryController', function () {
            httpBackend.flush();
            assert.equal(element.text().trim(), 'Showing Category: Electronics');
            done();
        });
    });
})();
