const usersRepo = require('./db');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('./constants');
const { checkHashedPassword } = require('./hashHelper')

const signToken = async (login, password) => {

    const user = usersRepo.getByProps({login});
    console.log(user);

    if(!user) {
        return null;
    } else {
        const { password:hashedPassword } = user;


        const comparisonRes = await checkHashedPassword(password, hashedPassword);

        if (comparisonRes) {
            const { id, login } = user;
            const token = jwt.sign({id, login}, SECRET_KEY, {expiresIn: '10m'});
            return token;
        } 

        return null;
    }

};

module.exports = {
    signToken
};