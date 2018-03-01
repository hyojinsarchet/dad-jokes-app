// importing our dependencies
const express = require('express')
const router = express.Router()
const Joke = require('../model/Joke')

// define out routes


// create new joke: '/'
router.post("/", (req, res) => {
  Joke.create(req.body).then(joke => {
    res.redirect(`/jokes/${joke.id}`);
  });
});

// get new view for a new jokes
router.get('/new', (req, res) => {
    res.render('joke/new')
})

// get a joke by its id: '/:id'
router.get("/:id", (req, res) => {
  Joke.findOne({ _id: req.params.id }).then(joke => {
    res.render("joke/show", joke);
  });
});

// update a joke by id: '/:id'


// delete a joke by id: '/:id'


// export out router
module.exports =router
