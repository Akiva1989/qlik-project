const express = require('express');
const messageRouter = require('./routers/message');
const sequelize = require('./postgres/postgres')

const app = express();
const port = process.env.PORT;


app.use(express.json());
app.use(messageRouter);

sequelize.sync()

app.listen(port, ()=> {
    console.log('server is up on port '+port);
});