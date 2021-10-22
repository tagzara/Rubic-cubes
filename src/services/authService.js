// const bcrypt = require('bcrypt');
const User = require('../models/User.js');

// with named export
exports.register = function (username, password, repeatPassword) {
    // first must validate password
    // return bcrypt.hash(password, 10)
    //     .then(hash => User.create({ username, password: hash }))

    return User.create({ username, password })
};