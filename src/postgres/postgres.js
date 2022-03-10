const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.POSTGRES_DB_NAME, 
    process.env.POSTGRES_USER_NAME, 
    process.env.POSTGRES_PASSWORD, 
    {
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        logging: false,
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
});

module.exports = sequelize;