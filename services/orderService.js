var Order  = require('../models/Order');

async function getOrder(orderId) {

    let allOrders = Order.findAll();
    return JSON.stringify(allOrders);
}

async function createOrder() {

    let order = Order.create({firstName : 'Kyle', lastName: 'Wilson', 'emailAddress': 'kylewilson52@gmail.com' });
    console.log(JSON.stringify(order));
    return "Susess";
}

module.exports = {getOrder: getOrder, createOrder: createOrder};