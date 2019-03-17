var express = require('express');
var router = express.Router();

const { getAllSongs, getSingleSong, getSongsFromGenre, getSongsFromUser } = require('../db/queries/songs_queries.js');

router.get('/', getAllSongs);
router.get('songs/:id', getSingleSong);
router.get('/genres/:id', getSongsFromGenre);
router.get('/users/:id', getSongsFromUser);
router.get('songs/:id', getSingleSong);

module.exports = router;
