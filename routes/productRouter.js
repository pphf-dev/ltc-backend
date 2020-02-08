const express = require('express');
const bodyParser = require('body-parser');

const productRouter = express.Router();

productRouter.use(bodyParser.json());

productRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Get all products');
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /products');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /products');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /products');
});

productRouter.route('/:category')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Get all products in category: ${req.params.category}`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /products');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /products');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /products');
});

//need to make sure this is working as designed
productRouter.route('/category/:productId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Get product with ID: ${req.params.productId}`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /products');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /products');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /products');
});

module.exports = productRouter;