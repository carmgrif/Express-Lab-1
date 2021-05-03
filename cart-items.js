

const express = require('express');
const cartItems = express.Router();


cartItems.use(express.json());

cartItems.get("/cart-items", (req, res) => {
    res.json("Getting all  students..");
});


cartItems.get("/cart-items/:id", (req, res) => {
    res.json("Getting all students..");
});


cartItems.get("/cart-items/:id", (req, res) => {
    console.log(req.params.id);
    res.json("Getting a student.");
});


cartItems.post("/cart-items", (req, res) => {
    console.log(req.body)
    res.json("Adding a student..");
});


cartItems.put("/cart-items/:id", (req, res) => {
    res.json("Updating a student..");
});


cartItems.delete("/cart-items/:id", (req, res) => {
    res.json("Deleting a student..");
});

cartItems.get('/search', (req, res) => {
    console.log(req.query.keyword);
    res.json('Search results');
})

module.exports = cartItems;