'use strict';

module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  });

  Item.associate = function(models) {
    models.Item.belongsTo(models.Order);
  };
  return Item;
};