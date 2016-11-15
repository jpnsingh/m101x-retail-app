(function () {
    'use strict';

    describe('counterDirective', function () {
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

        it('increments the counter when div is clicked', function (done) {
            httpBackend.whenGET('/m101x-retail-app/src/client/views/templates/shared/directives/counterDiv.html').passThrough();

            element = compiler('<data-counter-directive></data-counter-directive>')(scope);
            scope.$apply();

            scope.$on('CounterController', function () {
                assert.equal(element.text(), 'You have clicked this div 0 times.');
                element.click();
                assert.equal(element.text(), 'You have clicked this div 1 times.');
                done();
            });
        });
    });
})();
