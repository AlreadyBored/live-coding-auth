const { hashPassword } = require('./hashHelper');
const mockUsers = [
    {
        name: 'Admin',
        login: 'admin',
        //12345
        password: '$2b$10$m.b8Erwxoy7TVfkLxPrnp.3E0k1ewu8vLJ2guBUrmoIbHLrA/b6J2',
        id: 'id0'
    }
];

const getAll = () => mockUsers;

const getById = (id) => mockUsers.find((user) => user.id === id);

//{login: '12345', password: '12222'}
const getByProps = (props) => mockUsers.find(user => {
    const matches = Object.entries(props).map(item => {
        const [prop, value] = item;
        return user[prop] === value;
    });
    return matches.every(item => item === true);
});

const createUser = async (data) => {
    const { password } = data;
    const hashedPassword = await hashPassword(password);
    const newUser = {
        ...data,
        password: hashedPassword
    };
    mockUsers.push(newUser);
    return newUser;
};

module.exports = {
    getAll,
    getById,
    getByProps,
    createUser
};