const orderController = require('../controllers/orderController.js');

module.exports = (app) => {
    app.get('/api/v1/order/:orderId', (req, res) => res.send(orderController.getOrder(req.params.orderId)));
    app.get('/api/v1/order', (req, res) => res.send(orderController.createOrder()));
}