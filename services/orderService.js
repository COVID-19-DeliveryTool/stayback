const db = require('../models/model');

async function getOrder(orderId) {

    let allOrders = await db.Order.findAll({include: db.Item});
    console.log(JSON.stringify(allOrders));
    return JSON.stringify(allOrders);
}

async function createOrder() {

    let order = await db.Order.create({
        firstName: 'Kyle',
        lastName: 'Wilson',
        emailAdress: 'kylewilson52@gmail.com',
        Items: [ {'name' : 'my name's}, {name: 'item2'}]
    },{
        include: db.Item
    });
    // let item = Item.create({name: "dumbOrder", quantity: 2});
    console.log(JSON.stringify(order));
    // console.log(JSON.stringify(item));

    return "Susess";
}

module.exports = {getOrder: getOrder, createOrder: createOrder};