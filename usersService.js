const userRepo = require('./db');

const getAll = () => userRepo.getAll();
const getUser = (id) => userRepo.getById(id);

module.exports = {
    getAll,
    getUser
};