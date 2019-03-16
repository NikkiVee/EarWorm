const { db } = require('../index.js');

const getAllSongs = (req, res, next) => {
  db.any('SELECT * FROM songs')
  .then(songs => {
    res.status(200).json({
      status: 'success',
      songs: songs,
      message: 'Received All Songs',
    });
  })
  .catch(err => next(err));
};

const getSongsFromGenre = (req, res, next) => {
  [Number(req.params.id)];
  db.any('SELECT artist, title, song_url, genre_name FROM songs JOIN genres ON songs.genre_id=genres.id WHERE genres.id=$1',
  [Number(req.params.id)])
  .then(data => {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'Received Songs From Chosen Genre',
    });
  })
  .catch(err => next(err));
};

const getSongsFromUser = (req, res, next) => {
  [Number(req.params.id)];
  db.any('SELECT username, artist, title, song_url FROM songs JOIN users ON songs.user_id=users.id WHERE users.id=$1',
  [Number(req.params.id)])
  .then(data => {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'Received Songs From Chosen User',
    });
  })
  .catch(err => next(err));
};

module.exports = { getAllSongs, getSongsFromGenre, getSongsFromUser };
