const express = require('express');
const messageRouter = require('./routers/message');
const sequelize = require('./postgres/postgres')

const app = express();

app.use(express.json());
app.use(messageRouter);

sequelize.sync();

module.exports = app;