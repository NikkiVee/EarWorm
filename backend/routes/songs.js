var express = require('express');
var router = express.Router();

const { getAllSongs, getSongsFromGenre, getSongsFromUser } = require('../db/queries/songs_queries.js');

router.get('/', getAllSongs);
router.get('/genres/:id', getSongsFromGenre);
router.get('/users/:id', getSongsFromUser);

module.exports = router;
