const Sequelize = require('sequelize')
const moment = require('moment')
const sequelize = require('../postgres/postgres')

const Message = sequelize.define('message',{
    id: {
        type: Sequelize.INTEGER ,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    message: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isPalindrome: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: moment().format()
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: moment().format()
    }
});


module.exports = Message;