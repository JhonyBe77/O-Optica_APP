const express = require('express');
const router = express.Router();
const { addFavorite, getFavorites, removeFavorite } = require('../controller/favoritos.controller');
const verifyToken = require('../middlewares/auth.middleware');


router.post('/', verifyToken, addFavorite);
router.get('/', verifyToken, getFavorites); 
router.delete('/:id_montura', verifyToken, removeFavorite); 

module.exports = router;
