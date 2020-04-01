'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    itemId: DataTypes.STRING,
    name: DataTypes.STRING
  });
  return Item;
};