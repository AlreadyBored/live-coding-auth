const usersRepo = require('./db');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('./constants');

const signToken = (login, password) => {
    const user = usersRepo.getByProps({login, password});

    if(!user) {
        return null;
    } else {
        const { id, login } = user;
        const token = jwt.sign({id, login}, SECRET_KEY);
        return token;
    }

};

module.exports = {
    signToken
};