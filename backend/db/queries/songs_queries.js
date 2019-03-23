const { db } = require('../index.js');

const getAllSongs = (req, res, next) => {
  db.any('SELECT COUNT(favorites.song_id), songs.id, songs.user_id, artist, title, song_url, ARRAY_AGG(DISTINCT comment_body) FROM songs LEFT JOIN comments ON songs.id=comments.song_id  LEFT JOIN favorites ON favorites.song_id=comments.song_id GROUP BY songs.id, comments.comment_body ORDER BY comments.comment_body DESC')
  .then(songs => {
    res.status(200).json({
      status: 'success',
      songs: songs,
      message: 'Received All Songs',
    });
  })
  .catch(err => next(err));
};

const getSingleSong = (req, res, next) => {
  db.one('SELECT COUNT(favorites.song_id), songs.id, songs.user_id, artist, title, song_url, comments.comment_body FROM songs LEFT JOIN comments ON songs.id=comments.song_id  LEFT JOIN favorites ON favorites.song_id=comments.song_id WHERE songs.id=1 GROUP BY songs.id, comments.comment_body', [Number(req.params.id)])
  .then(songs => {
    res.status(200).json({
      status: 'success',
      songs: songs,
      message: 'Recieved One Song',
    });
  })
  .catch(err => next(err));
};


// const getOneSong = (req, res, next) => {
//   [Number(req.params.id)];
//   db.any('SELECT COUNT(favorites.song_id), artist, title, song_url, comment_body FROM favorites JOIN songs ON favorites.song_id=songs.id JOIN comments ON comments.user_id=songs.user_id WHERE songs.id=$1 GROUP BY songs.artist, songs.title, songs.song_url, comments.comment_body',
//   [Number(req.params.id)])
//   .then(data => {
//     res.status(200).json({
//       status: 'success',
//       data: data,
//       message: 'Received One Song',
//     });
//   })
//   .catch(err => next(err));
// };

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
  db.any('SELECT COUNT(favorites.song_id), songs.id, songs.user_id, artist, title, song_url, ARRAY_AGG(DISTINCT comment_body) FROM songs LEFT JOIN comments ON songs.id=comments.song_id  LEFT JOIN favorites ON favorites.song_id=comments.song_id WHERE songs.user_id=$1 GROUP BY songs.id, comments.comment_body',
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

module.exports = { getAllSongs, getSingleSong, getSongsFromGenre, getSongsFromUser };
