const Sequelize = require('sequelize');

class Order extends Sequelize.Model {
    static associate(models) {
        models.Order.hasMany(models.Item)
    }

    static init(sequelize, DataTypes) {
        return super.init(
            {
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
                assignedToOrg: DataTypes.STRING
            },
            {sequelize}
        );
    }
}

module.exports = Order;

