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

//{login: '12345', password: '12222'}
const getByProps = (props) => mockUsers.find(user => {
    const matches = Object.entries(props).map(item => {
        const [prop, value] = item;
        return user[prop] === value;
    });
    return matches.every(item => item === true);
});

module.exports = {
    getAll,
    getById,
    getByProps
};