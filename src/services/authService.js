const User = require('../models/User.js');
const { jwtSign } = require('../utils/tokenUtils.js');
const { SECRET } = require('../constants.js');

// with named export
exports.register = function (username, password, repeatPassword) {

    return User.create({ username, password })
};

exports.login = function (username, password) {
    return User.findByUsername(username)
        .then(user => Promise.all([user.validatePassword(password), user]))
        .then(([isValid, user]) => {
            if (isValid) {
                return user;
            } else {
                throw { message: 'Cannot find username or password' }
            }
        })
        .catch(err => {
            return null;
        });
};

exports.createToken = function (user) {
    let payload = {
        _id: user._id,
        username: user.username
    }
    return jwtSign(payload, SECRET);
}