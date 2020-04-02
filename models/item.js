const Sequelize = require('sequelize');

class Item extends Sequelize.Model {
    static associate(models) {
        models.Item.belongsTo(models.Order)
    }
    static init(sequelize, DataTypes) {
        return super.init(
            {
                name: DataTypes.STRING,
                quantity: DataTypes.STRING
            },
            {sequelize}
        );
    }
}

module.exports = Item;