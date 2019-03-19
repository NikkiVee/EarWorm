var express = require('express');
var router = express.Router();

const { getAllGenres, getAllGenreInfo, createGenre } = require('../db/queries/genres_queries.js');

router.get('/', getAllGenres);
router.get('/genreInfo', getAllGenreInfo);
router.post('/', createGenre);

module.exports = router;
