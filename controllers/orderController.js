const orderService = require('../services/orderService.js');

function getOrder(orderId) {

    return orderService.getOrder(orderId);
}

module.exports = {getOrder: getOrder};