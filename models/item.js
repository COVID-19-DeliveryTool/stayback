const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = require('./index');

class Item extends Model {
}

Item.init({
    name: Sequelize.STRING,
    quantity: Sequelize.STRING
}, {
    sequelize,
    modelName: 'item'
});


module.exports = Item;
