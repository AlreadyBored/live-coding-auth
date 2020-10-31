const SECRET_KEY = 'SHHHH!';

const PATH_WHITELIST = [
    '/login',
    '/doc',
    '/smthng'
];

const DEFAULT_SALT_ROUNDS = 10;

module.exports = {
    SECRET_KEY,
    PATH_WHITELIST,
    DEFAULT_SALT_ROUNDS
};