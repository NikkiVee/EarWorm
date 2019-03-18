var express = require('express');
var router = express.Router();

const { getAllSongs, getSingleSong, getSongsFromGenre, getSongsFromUser } = require('../db/queries/songs_queries.js');

router.get('/', getAllSongs);
router.get('/:id', getSingleSong);
router.get('/genres/:id', getSongsFromGenre);
router.get('/users/:id', getSongsFromUser);

module.exports = router;
