const express = require('express');
const bodyParser = require('body-parser');

const userRouter = express.Router();

userRouter.use(bodyParser.json());

userRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.statusCode = 403;
    res.end('GET operation not supported on /user');
})
.post((req, res) => {
    res.end('CREATE new user');
})
.put((req, res) => {
    res.end('Update user profile');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /user');
});

module.exports = userRouter;