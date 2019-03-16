const { db } = require('../index.js');

const getAllGenres = (req, res, next) => {
  db.any('SELECT * FROM genres')
  .then(genres => {
    res.status(200).json({
      status: 'success',
      genres: genres,
      message: 'Received All Genres',
    });
  })
  .catch(err => next(err));
};

const createGenre = (req, res, next) => {
  db.none('INSERT INTO genres (genre_name) VALUES (${genre_name})', req.body)
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'New Genre Created',
    });
  })
  .catch(err => next(err));
};

module.exports = { getAllGenres, createGenre };
