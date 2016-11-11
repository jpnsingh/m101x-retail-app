(function () {
    'use strict';

    var mongoose = require('mongoose'),
        userSchema = require('../schema/userSchema'),
        wagner = require('wagner-core');

    mongoose.connect('mongodb://localhost:27017/test');

    var UserModel = mongoose.model('User', userSchema, 'users');

    wagner.factory('UserModel', function () {
        return UserModel;
    });

    return {
        UserModel: UserModel
    };
})();
