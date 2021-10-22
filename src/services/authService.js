const User = require('../models/User.js');
const bcrypt = require('bcrypt');

// with named export
exports.register = function (username, password, repeatPassword) {

    return User.create({ username, password })
};

exports.login = function (username, password) {
    return User.findByUsername(username)
        .then(user => Promise.all([bcrypt.compare(password, user.password), user]))
        .then(([isValid, user]) => {
            if (isValid) {
                return user;
            } else {
                throw { message: 'Cannot find username or password' }
            }
        })
};