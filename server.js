const express = require('express');
const usersRouter = require('./usersRouter');

const app = express();

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`App is runiing on port ${PORT}`);
});

app.use('/users', usersRouter);