const mockUsers = [
    {
        name: 'User1',
        login: 'login1',
        password: 'u123451',
        id: 'id1'
    },
    {
        name: 'User2',
        login: 'login2',
        password: 'u123452',
        id: 'id2'
    },
    {
        name: 'User3',
        login: 'login3',
        password: 'u123453',
        id: 'id3'
    }
];

const getAll = () => mockUsers;

const getById = (id) => mockUsers.find((user) => user.id === id);

module.exports = {
    getAll,
    getById
};