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

const getAllGenreInfo = (req, res, next) => {
  db.any('SELECT COUNT(favorites.song_id), songs.id, songs.user_id, artist, title, song_url, comments.comment_body, genre_name FROM users LEFT JOIN comments ON users.id=comments.user_id LEFT JOIN songs ON songs.id=comments.song_id LEFT JOIN genres ON genres.id=songs.genre_id LEFT JOIN favorites ON favorites.user_id=songs.user_id GROUP BY songs.id, comments.comment_body, genres.genre_name ORDER BY songs.artist ASC, genres.genre_name')
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

module.exports = { getAllGenres, getAllGenreInfo, createGenre };
