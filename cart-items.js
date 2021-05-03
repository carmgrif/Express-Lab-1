

const express = require('express');
const cartItems = express.Router();


cartItems.use(express.json());

cartItems.get("/cart-items", (req, res) => {
    res.json(cartItems);
});


cartItems.get("/cart-items/:id", (req, res) => {
    res.json("Getting cart items by ID");
});


cartItems.get("/cart-items/:id", (req, res) => {
    console.log(req.params.id);
    res.json("Getting cart items by ID");
});


cartItems.post("/cart-items", (req, res) => {
    console.log(req.body)
    res.json("Adding cart items");
});


cartItems.put("/cart-items/:id", (req, res) => {
    res.json("Updating cart items");
});


cartItems.delete("/cart-items/:id", (req, res) => {
    res.json("Deleting cart");
});

cartItems.get('/search', (req, res) => {
    console.log(req.query.keyword);
    res.json('Search results');
})

module.exports = cartItems;