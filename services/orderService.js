var models  = require('../models');

async function getOrder(orderId) {

    let allOrders = models.Order.findAll();
    return JSON.stringify(allOrders);
}

async function createOrder() {

    let order = models.Order.build({firstName : 'Kyle', lastName: 'Wilson', 'emailAddress': 'kylewilson52@gmail.com' });
    await order.save();
    return "Susess";
}

module.exports = {getOrder: getOrder, createOrder: createOrder};