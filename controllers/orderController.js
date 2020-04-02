const orderService = require('../services/orderService.js');

function getOrder(orderId) {

    return orderService.getOrder(orderId);
}

//TOOD accept params
function createOrder() {
    return orderService.createOrder();
}

module.exports = {getOrder: getOrder, createOrder: createOrder};