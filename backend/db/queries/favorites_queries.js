const { db } = require('../index.js');

const getAllFavorites = (req, res, next) => {
  db.any('SELECT * FROM favorites')
  .then(favorites => {
    res.status(200).json({
      status: 'success',
      favorites: favorites,
      message: 'Received All Favorites',
    });
  })
  .catch(err => next(err));
};

const getFavoritesFromSong = (req, res, next) => {
  [Number(req.params.id)];
  db.any('SELECT favorites.song_id, favorites.user_id, artist, title, song_url, comment_body, username FROM songs JOIN favorites ON songs.id=favorites.song_id JOIN comments ON songs.id=comments.song_id JOIN users ON songs.user_id=users.id WHERE songs.id=$1',
  [Number(req.params.id)])
  .then(data => {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'Received Favorites From One Song',
    });
  })
  .catch(err => next(err));
};

const getFavoritesFromUser = (req, res, next) => {
  [Number(req.params.id)];
  db.any('SELECT favorites.song_id, favorites.user_id, artist, title, song_url, comment_body, username, users.id FROM songs JOIN favorites ON songs.id=favorites.song_id JOIN comments ON songs.id=comments.song_id JOIN users ON songs.user_id=users.id WHERE users.id=$1',
  [Number(req.params.id)])
  .then(data => {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'Received Favorites From One User',
    });
  })
  .catch(err => next(err));
};

const createFavorite = (req, res, next) => {
  db.none('INSERT INTO favorites (user_id, song_id) VALUES (${user_id}, ${song_id})', req.body)
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'Created New Favorite',
    });
  })
  .catch(err => next(err));
};

const deleteFavorite = (req, res, next) => {
  db.none('DELETE FROM favorites WHERE id=$1',
   [Number(req.params.id)])
   .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'Successfully Deleted Favorite',
    });
  })
   .catch(err => next(err));
};

module.exports = { getAllFavorites, getFavoritesFromSong, getFavoritesFromUser, createFavorite, deleteFavorite };
