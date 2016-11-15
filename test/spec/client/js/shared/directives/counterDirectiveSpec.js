(function () {
    'use strict';

    describe('counterDirective', function () {
        var injector,
            element,
            scope;

        beforeEach(function () {
            injector = angular.injector(['m101x']);

            injector.invoke(function ($rootScope, $compile) {
                scope = $rootScope.$new();
                element = $compile('<data-counter-directive></data-counter-directive>')(scope);
                scope.$apply();
            });
        });

        it('increments the counter when div is clicked', function () {
            assert.equal(element.text(), 'You\'ve clicked this div 0 times.');
            element.click();
            assert.equal(element.text(), 'You\'ve clicked this div 1 times.');
        });
    });
})();
