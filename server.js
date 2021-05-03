const express = require("express");
const cartItems = require('./cart-items');

const app = express();

const cartItems = [
    {
        id: '48374',
        product: 'mandarin oranges',
        price: 3.99,
        quantity: 1
    },

     {
        id: '60385',
        product: 'nectarines',
        price: 5.99,
        quantity: 8
    },
     
      {
        id: '91847',
        product: 'spinach',
        price: 0.89,
        quantity: 1
    },
      
    {
        id: '73497',
        product: 'bananas',
        price: 2.50,
        quantity: 3
    }
]

app.use('/', cartItems);


const port = 3000;

app.listen(3000, () => console.log('Listening on port 3000'));

