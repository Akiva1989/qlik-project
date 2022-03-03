const Sequelize = require('sequelize')

const sequelize = new Sequelize("drp20gnt8jf0i", "jfrgcpvrwreeej", "62eb841ae0fd8e52d0568240a3723357204fa0ea970cc6b771f87996b30351f6", {
    host: "ec2-52-70-186-184.compute-1.amazonaws.com",
    port: 5432,
    logging: false,
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
     },
})

module.exports = sequelize;
