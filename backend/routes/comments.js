var express = require('express');
var router = express.Router();

const { getAllComments, getCommentsFromSong, createComment, editComment, deleteComment } = require('../db/queries/comments_queries.js');

router.get('/', getAllComments);
router.get('/songs/:id', getCommentsFromSong);
router.post('/', createComment);
router.patch('/:id', editComment);
router.delete('/:id', deleteComment);

module.exports = router;
