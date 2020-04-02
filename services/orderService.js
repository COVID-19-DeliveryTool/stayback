var Order  = require('../models/Order');
var Item = require('../models/Item')
async function getOrder(orderId) {

    let allOrders = Order.findAll();
    return JSON.stringify(allOrders);
}

async function createOrder() {

    let order = Order.create({firstName : 'Kyle', lastName: 'Wilson', 'emailAddress': 'kylewilson52@gmail.com' });
    let item = Item.create({name: "dumbOrder", quantity: 2});
    console.log(JSON.stringify(order));
    console.log(JSON.stringify(item));

    return "Susess";
}

module.exports = {getOrder: getOrder, createOrder: createOrder};