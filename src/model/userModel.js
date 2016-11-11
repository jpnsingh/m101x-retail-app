(function () {
    'use strict';

    var mongoose = require('mongoose'),
        userSchema = require('../schema/user'),
        wagner = require('wagner-core'),
        util = require('util');

    mongoose.connect('mongodb://localhost:27017/test');

    var User = mongoose.model('User', userSchema);

    wagner.factory('User', function () {
        return User
    });

    // myFunction(User);
    //
    // function myFunction(User) {
    //     User.create({name: 'John'}, function (error, doc) {
    //         console.log(util.inspect(doc));
    //     });
    // }
})();
