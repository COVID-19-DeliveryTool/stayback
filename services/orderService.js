const db = require('../models/model');

async function getOrder(orderId) {

    let allOrders = await db.Order.findAll({include: db.Item});
    console.log(JSON.stringify(allOrders));
    return JSON.stringify(allOrders);
}

async function createOrder(orderDetails) {
    // console.log(orderDetails)
    let geometry = {}
    //call getCords and populate lat/long here
    // geometry.lat = coords.lat
    // geometry.long = coords.lng
    console.log("test0")
    prevOrder = await models.Order.findOne({ where: {address: orderDetails.address}})
    console.log("test :" + prevOrder)
    if (prevOrder && prevOrder.dateCreated > new Date(Date.now() - 3*60*60 * 1000) && orderDetails.type == 'REQUEST'){
      return  ({"status": "400", "message": "Order has already been placed from this address within 3 hours."})
    }
    orderDetails.latitude = 0
    orderDetails.longitude = 0
    //maybe add a dateCreated field
    orderDetails.dateCreated = new Date(Date.now())
    orderDetails.status = "PENDING"
    orderDetails.assignedToDriver = ""
    orderDetails.assignedToOrg = ""
    let order = await db.Order.create(orderDetails)
    return {"status": '200', 'message':"Successfully inserted item with id:" + order.id}


}

module.exports = {getOrder: getOrder, createOrder: createOrder};
