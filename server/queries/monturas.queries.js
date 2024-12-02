const queries = {
   
    createMontura: `INSERT INTO monturas (name, price, img, color, description_summary, categoria) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,

    getAllMonturas: `SELECT * FROM monturas`,

    // Consulta para buscar monturas por nombre o color.
    // Uso ILIKE para que la búsqueda sea insensible a mayúsculas y minúsculas.
    // Si se pasa una categoría, filtro las monturas que coinciden con ella.
    buscarMonturas: (categoria) => {
        let query = `
            SELECT * FROM monturas
            WHERE (name ILIKE $1 OR color ILIKE $1)  -- Buscar en name y color
        `;
        if (categoria) {
            query += ` AND categoria = $2`; // Filtro adicional por categoría
        }
        return query;
    },

    getMonturasByCategoria: `SELECT * FROM monturas WHERE categoria = $1`,

    updateMontura: `UPDATE monturas SET name = $1, price = $2, img = $3, color = $4, description_summary = $5, categoria = $6 WHERE id = $7 RETURNING *`,

    deleteMontura: `DELETE FROM monturas WHERE id = $1 RETURNING *`,
};

module.exports = queries;
