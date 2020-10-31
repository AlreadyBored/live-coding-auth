const router = require('express').Router();
const loginService = require('./loginService');

router.post('/', async (req, res) => {
    const { login, password } = req.body;
    
    const token = await loginService.signToken(login, password);

    if (!token) {
        res.status(403).send('Wrong login/password combination!');
    } else {
        res.status(200).json(token);
    }

});

module.exports = router;