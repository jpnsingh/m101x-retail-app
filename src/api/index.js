(function () {
    'use strict';

    module.exports = function (wagner) {
        return {
            dashboardApi: require('./dashboardApi')(wagner),
            userApi: require('./userApi')(wagner),
            categoryApi: require('./categoryApi')(wagner),
            productApi: require('./productApi')(wagner)
        };
    };
})();
