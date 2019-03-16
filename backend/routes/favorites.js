var express = require('express');
var router = express.Router();

const { getAllFavorites, getFavoritesFromSong, getFavoritesFromUser, createFavorite, deleteFavorite } = require('../db/queries/favorites_queries.js');

router.get('/', getAllFavorites);
router.get('/songs/:id', getFavoritesFromSong);
router.get('/users/:id', getFavoritesFromUser);
router.post('/', createFavorite);
router.delete('/:id', deleteFavorite);

module.exports = router;
