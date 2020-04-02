const Sequelize = require("sequelize");
const sequelize = require('./index.js');

const Order = require("./order.js");
const Item = require("./item");

const models = {
    Order: Order.init(sequelize, Sequelize),
    Item: Item.init(sequelize, Sequelize),
};

// Run `.associate` if it exists,
// ie create relationships in the ORM
Object.values(models)
    .filter(model => typeof model.associate === "function")
    .forEach(model => model.associate(models));

const db = {
    ...models,
    sequelize
};

module.exports = db;