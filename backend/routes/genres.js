var express = require('express');
var router = express.Router();

const { getAllGenres, createGenre } = require('../db/queries/genres_queries.js');

router.get('/', getAllGenres);
router.post('/', createGenre);

module.exports = router;
