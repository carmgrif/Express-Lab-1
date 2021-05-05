const express = require("express");
const cartItems = require('./cart-items');

const app = express();



app.use('/', cartItems);


const port = 3000;

app.listen(3000, () => console.log('Listening on port 3000'));

