var models  = require('../models');


async function getOrder(orderId) {

    let allOrders = models.Order.findAll();
    return JSON.stringify(allOrders);
}

module.exports = {getOrder: getOrder};