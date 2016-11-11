(function () {
    'use strict';

    var mongoose = require('mongoose'),
        userSchema = require('../schema/userSchema'),
        wagner = require('wagner-core'),
        util = require('util');

    mongoose.connect('mongodb://localhost:27017/test');

    var UserModel = mongoose.model('User', userSchema);

    wagner.factory('UserModel', function () {
        return UserModel
    });

    // myFunction(User);
    //
    // function myFunction(User) {
    //     User.create({name: 'John'}, function (error, doc) {
    //         console.log(util.inspect(doc));
    //     });
    // }
})();
