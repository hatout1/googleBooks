const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/allSaved", (req, res) => {
  db.Book.find()
    .then(books => {
      res.json(books);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/save", (req, res) => {
  db.Book.create({
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    link: req.body.link
  }).then(book => {
    res.json(book);
  });
});

router.delete("/book/:id", (req, res) => {
  db.Book.findByIdAndDelete(req.params.id)
    .then(book => {
      res.json(book);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
