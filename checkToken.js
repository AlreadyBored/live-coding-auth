const jwt = require('jsonwebtoken');
const { SECRET_KEY, PATH_WHITELIST } = require('./constants');

module.exports = (req, res, next) => {
    
    const authHeader = req.header('Authorization');

    if (authHeader !== undefined) {

        const tokenString = req.header('Authorization');

        const [type, token] = tokenString.split(' ');

        if (type !== 'Bearer') {
            res.status(401).send('Unauthorized user!');
        } else {
            try {
                const res = jwt.verify(token, SECRET_KEY);
                console.log(res);
            } catch(e) {
                res.status(401).send('Unauthorized user!');
            }
            return next();
        }

    }

    res.status(401).send('Unauthorized user!');
};
