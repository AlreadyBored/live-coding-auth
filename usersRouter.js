const router = require('express').Router();
const usersService = require('./usersService');

router.get('/', (req, res) => {
    const users = usersService.getAll();
    res.status(200).send(users);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const user = usersService.getUser(id);

    if(!user) {
        res.status(404).send('User is not found!');
    } else {
        res.status(200).send(user);
    }
});

module.exports = router;