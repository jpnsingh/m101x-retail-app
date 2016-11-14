(function () {
    'use strict';

    var userSchema = require('../schema/userSchema');

    module.exports = function (mongoose, wagner) {
        var UserModel = mongoose.model('User', userSchema, 'users');

        wagner.factory('UserModel', function () {
            return UserModel;
        });

        return {
            UserModel: UserModel
        };
    };
})();
