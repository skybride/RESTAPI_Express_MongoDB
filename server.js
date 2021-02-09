require('dotenv').config();

const express = require('express');
const server = express();
const port = 5000;
const mongoose = require('mongoose');

//Connect to DB
mongoose.connect(
    process.env.DATABASE_KEY, 
    { useNewUrlParser: true,
    useUnifiedTopology: true },
    () => console.log("Connected to Database")
);

server.use(express.json());

const subscribeRoute = require('./routes/subscribers');
server.use('/subscribers', subscribeRoute);

server.listen(port, () => {
    console.log('Started Server');
});
