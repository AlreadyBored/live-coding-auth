const express = require('express');
const usersRouter = require('./usersRouter');
const loginRouter = require('./loginRouter');
const checkToken = require('./checkToken');

const app = express();
app.use(express.json());

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`App is runiing on port ${PORT}`);
});

app.use('/', checkToken);

app.use('/login', loginRouter);

app.use('/users', checkToken, usersRouter);

