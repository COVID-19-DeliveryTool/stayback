const orderService = require('../services/orderService.js');

function getOrder(orderId) {
    return orderService.getOrder(orderId);
}

function createOrder(orderDetails) {
    return orderService.createOrder(orderDetails);
}

module.exports = {getOrder: getOrder, createOrder: createOrder};
