const express = require('express');
const bodyParser = require('body-parser');

const feedbackRouter = express.Router();

feedbackRouter.use(bodyParser.json());

feedbackRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.statusCode = 403;
    res.end('GET operation not supported on /feedback');
})
.post((req, res) => {
    res.end('CREATE new feedback record');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /feedback');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /feedback');
});

module.exports = feedbackRouter;