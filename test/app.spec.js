const { Movie } = require('../models/Movie');
const axios = require('axios');
const chai = require('chai');

const expect = chai.expect;

describe('Movie class', () => {
    it('should get a movie', (done) => {
        const movie = new Movie('Film');
        movie.getMovie()
                .then(result => {
                    expect(result).to.be.a('string');
                    done();
                })
                .catch(done);
    });

});