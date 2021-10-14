const Sequelize = require('sequelize');
const db = require('../config/databse')

const Movie = db.define('movie', {
    title: {
        type: Sequelize.STRING
    },
    zanr: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    rating: {
        type: Sequelize.STRING
    },
    contact_email: {
        type: Sequelize.STRING
    },
});

module.exports = Movie;