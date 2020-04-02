const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = require('./index');

class Order extends Model {}

Order.init({
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    emailAddress: Sequelize.STRING,
    address: Sequelize.STRING,
    phoneNumber: Sequelize.STRING,
    zipCode: Sequelize.STRING,
    additionalInfo: Sequelize.STRING,
    householdNumber: Sequelize.INTEGER,
    latitude: Sequelize.STRING,
    longitude: Sequelize.STRING,
    status: {
        type: Sequelize.ENUM,
        values: ['PENDING',
            'IN PROGRESS',
            'COMPLETED',
            'CANCELLED',
            'ERROR/ACTION']
    },
    assignedToDriver: Sequelize.STRING,
    assignedToOrg: Sequelize.STRING}, {
    sequelize,
    modelName: 'order'});


module.exports = Order;
