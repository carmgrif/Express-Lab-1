const express = require('express');
const students = express.Router();


students.use(express.json());

students.get("/students", (req, res) => {
    res.json("Getting all students..");
});


students.get("/students/:id", (req, res) => {
    console.log(req.params.id);
    res.json("Getting a student.");
});


students.post("/students", (req, res) => {
    console.log(req.body)
    res.json("Adding a student..");
});


students.put("/students", (req, res) => {
    res.json("Updating a student..");
});


students.delete("/students", (req, res) => {
    res.json("Deleting a student..");
});

students.get('/search', (req, res) => {
    console.log(req.query.keyword);
    res.json('Search results');
})

module.exports = students;