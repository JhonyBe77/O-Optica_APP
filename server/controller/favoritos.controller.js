const FavoritosModel = require('../models/favoritos.model');


const addFavorite = async (req, res) => {
    console.log("addFavorite ejecutado", req.body);
    const { id_montura } = req.body;
    const userId = req.user ? req.user.id : null;
    console.log("Usuario autenticado:", userId);

    try {
        await FavoritosModel.addFavorite(userId, id_montura);
        res.status(201).send('Favorito añadido');
    } catch (err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
};


const getFavorites = async (req, res) => {
    const userId = req.user.id; // ID del usuario autenticado

    try {
        const favorites = await FavoritosModel.getFavoritesByUser(userId);
        res.status(200).json(favorites);
    } catch (err) {
        res.status(500).send(err.message);
    }
};


const removeFavorite = async (req, res) => {
    const { id_montura } = req.params;
    const userId = req.user.id; // ID del usuario autenticado

    try {
        await FavoritosModel.removeFavorite(userId, id_montura);
        res.status(200).send('Favorito eliminado');
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = { addFavorite, getFavorites, removeFavorite };
