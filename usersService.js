const userRepo = require('./db');

const getAll = () => userRepo.getAll();
const getUser = (id) => userRepo.getById(id);
const createUser = async (data) => await userRepo.createUser(data);

module.exports = {
    getAll,
    getUser,
    createUser
};