const express = require('express');
const router = express.Router();
const db = require('../config/databse');
const Movie = require('../models/Movie');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Get movie list
router.get('/', (req, res) => 
    Movie.findAll()
        .then(movies => {
            
            res.render('movies', {
                movies
            });
        })
        .catch(err => console.log(err)));

// Display add movie form
router.get('/add', (req, res) => res.render('add'));       

// Add a movie
router.post('/add', (req, res) => {
  

    let = {title,zanr,description,rating,contact_email } = req.body;
    let errors = [];

    if(!title){
            errors.push({ text: 'Molimo dodajte naslov'})
    }
    if(!description){
        errors.push({ text: 'Molimo dodajte opis'})
    }

    //Check errors
    if(errors.length > 0){
      res.render('add', {
          errors,
          description
      });     
    } else {
     // lowercase and remove space after comma
    //  zanr = zanr.toLowerCase().replace(/, /g, ',');   

      //Insert into table
    Movie.create({
        title,
        zanr,
        description,
        rating,
        contact_email
    })
    .then(movie => res.redirect('/movies'))
    .catch(err => console.log(err));  
    }
});

// Search movies

router.get('/search', (req, res) => {
    const { term } = req.query;

    Movie.findAll({ where: { zanr: { [Op.like]: '%' + term + '%' } } })
        .then(movies => res.render('movies', { movies }))
        .catch(err => console.log(err))
});


module.exports = router;