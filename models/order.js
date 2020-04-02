'use strict';
module.exports = (sequelize, DataTypes) => {
    var Order = sequelize.define('Order', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        emailAddress: DataTypes.STRING,
        address: DataTypes.STRING,
        phoneNumber: DataTypes.STRING,
        zipCode: DataTypes.STRING,
        additionalInfo: DataTypes.STRING,
        householdNumber: DataTypes.INTEGER,
        latitude: DataTypes.STRING,
        longitude: DataTypes.STRING,
        status: {
            type: DataTypes.ENUM,
            values: ['PENDING',
                'IN PROGRESS',
                'COMPLETED',
                'CANCELLED',
                'ERROR/ACTION']
        },
        assignedToDriver: DataTypes.STRING,
        assignedToOrg: DataTypes.STRING,
    });

    Order.associate = function(models) {
      models.Order.hasMany(models.Item);
    };

    return Order;
};