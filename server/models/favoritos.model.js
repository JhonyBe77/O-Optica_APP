const pool = require('../config/db_pgsql');

const FavoritosModel = {

    addFavorite: async (userId, id_montura) => {
        const query = `
            INSERT INTO favoritos (id_user, id_montura, fecha_creacion)
            VALUES ($1, $2, NOW())
        `;
        const values = [userId, id_montura];
        await pool.query(query, values);
    },

    
    getFavoritesByUser: async (userId) => {
        const query = `
            SELECT monturas.* 
            FROM favoritos 
            JOIN monturas ON favoritos.id_montura = monturas.id 
            WHERE favoritos.id_user = $1
        `;
        const { rows } = await pool.query(query, [userId]);
        return rows;
    },

    
    removeFavorite: async (userId, id_montura) => {
        const query = `
            DELETE FROM favoritos 
            WHERE id_user = $1 AND id_montura = $2
        `;
        const values = [userId, id_montura];
        await pool.query(query, values);
    }
};

module.exports = FavoritosModel;
