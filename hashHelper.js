const bcrypt = require('bcrypt');
const { DEFAULT_SALT_ROUNDS } = require('./constants');

const hashPassword = async (password) => {

    const salt = await bcrypt.genSalt(DEFAULT_SALT_ROUNDS);
    console.log('SALT:');
    console.log(salt);
    const hash = await bcrypt.hash(password, salt);
    console.log('HASH:');
    console.log(hash);
  
    return hash;
};

const checkHashedPassword = async (password, hash) => await bcrypt.compare(password, hash);

module.exports = {
    hashPassword,
    checkHashedPassword
};