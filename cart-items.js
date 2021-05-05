
const express = require("express");
const router = express.Router();
// const cartItems = require('./cart-items');

// const app = express();


router.use(express.json());


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



// const port = 3000;

// app.listen(3000, () => console.log('Listening on port 3000'));




router.get("/cart-items", (req, res) => {
    res.json(cartItems);
});


router.get("/cart-items/:id", (req, res) => {
    console.log(req.params.id);
    const found = cartItems.find(item => item.id === parseInt(req.params.id));

    if (!found) {
        res.status(404).send('The cart item could not be found');
    } else {
        res.json(found);
    }
});


router.post("/cart-items", (req, res) => {
    const quantity = parseInt(req.body.quantity);

    if (!quantity) {
        return res.status(400).send('Invalid quantity');
    }

    const price = parseInt(req.body.quantity);

    if (!price) {
        return res.status(400).send('Invalid price');
    }

    const newItem = {
        id: cartItems.length + 1,
        product: req.body.product,
        price: req.body.price,
        quantity: quantity
    };

    cartItems.push(newItem);
    res.status(201).json(newItem);

});


router.put("/cart-items/:id", (req, res) => {
    
    const found = cartItems.find(item => item.id === parseInt(req.params.id));

    if (found) {
        found.price = req.body.price;
    }
});


router.delete("/cart-items/:id", (req, res) => {
    res.json("Deleting cart");
});

router.get('/search', (req, res) => {
    console.log(req.query.keyword);
    res.json('Search results');
})

module.exports = router;