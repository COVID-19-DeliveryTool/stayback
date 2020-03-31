'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    orderId: DataTypes.STRING,
    email: DataTypes.STRING
  });

  /*
  Order.associate = function(models) {
    models.User.hasMany(models.Items);
  };*/

  return Order;
};