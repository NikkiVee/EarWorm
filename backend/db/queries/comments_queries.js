const { db } = require('../index.js');

const getAllComments = (req, res, next) => {
  db.any('SELECT * FROM comments')
  .then(comments => {
    res.status(200).json({
      status: 'success',
      comments: comments,
      message: 'Received All Comments',
    });
  })
  .catch(err => next(err));
};

const getCommentsFromSong = (req, res, next) => {
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

const createComment = (req, res, next) => {
  db.none('INSERT INTO comments (comment_body, user_id, song_id) VALUES (${comment_body}, ${user_id}, ${song_id})', req.body)
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'Created New Comment',
    });
  })
  .catch(err => next(err));
};

const editComment = (req, res, next) => {
  db.none('UPDATE comments SET comment_body=${comment_body}, user_id=${user_id}, song_id=${song_id}', {
    comment_body: req.body.comment_body,
    user_id: req.body.user_id,
    song_id: req.body.song_id,
  })
  .then(() => {
    res.status(200)
    .json({
      status: 'succes',
      message: 'Successful Comment Edit',
    });
  })
  .catch(err => {
    return next(err);
  });
};

const deleteComment = (req, res, next) => {
  db.none('DELETE FROM comments WHERE id=$1',
   [Number(req.params.id)])
   .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'Successfully Deleted Comment',
    });
  })
   .catch(err => next(err));
};

module.exports = { getAllComments, getCommentsFromSong, createComment, editComment, deleteComment };
