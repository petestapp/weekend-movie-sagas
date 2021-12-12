const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // const query = `SELECT * FROM genres ORDER BY "id" ASC`;
  const query = `SELECT genres.name, movies.id FROM genres
  JOIN movies_genres ON movies_genres.genre_id = genres.id
  JOIN movies ON movies.id = movies_genres.movie_id
  ORDER by id ASC;`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all genres', err);
      res.sendStatus(500)
    })
});

module.exports = router;