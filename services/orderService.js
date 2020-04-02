var models  = require('../models');

async function getOrder(orderId) {

    let allOrders = models.Order.findAll();
    return JSON.stringify(allOrders);
}

async function createOrder(orderDetails) {
    let geometry = {}
    //call getCords and populate lat/long here
    // geometry.lat = coords.lat
    // geometry.long = coords.lng
    prevOrder = models.Order.find({ where: {address: orderDetails.address}})
    if (prevOrder.dateCreated > new Date(Date.now() - 3*60*60 * 1000))
    orderDetails.latitude = 0
    orderDetails.longitude = 0
    //maybe add a dateCreated field
    orderDetails.dateCreated = new Date(Date.now())
    orderDetails.status = "PENDING"
    orderDetails.assignedToDriver = ""
    orderDetails.assignedToOrg = ""
    let order = models.Order.build(orderDetails);

    await order.save();
    return "Success";



}

module.exports = {getOrder: getOrder, createOrder: createOrder};
