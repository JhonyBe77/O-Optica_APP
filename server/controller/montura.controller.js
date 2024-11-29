const monturaModel = require('../models/montura.model'); // Importación del modelo Product
const pool = require('../config/db_pgsql');

// Obtener todas las monturas o por ID
const getMonturas = async (req, res) => {
    let monturas;

    try {
        if (req.query.id) {
            monturas = await monturaModel.getUserById(req.query.id);
        } else {
            monturas = await monturaModel.getAllMonturas();
        }
        res.json({ monturas: monturas });
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener la montura: ' + err });
    }
};

// Obtener monturas por categoría
const getMonturasByCategoria = async (req, res) => {
    const { categoria } = req.params;
    console.log('Categoría solicitada:', categoria); // Log para depuración

    try {
        const query = 'SELECT * FROM monturas WHERE categoria = $1';
        const result = await pool.query(query, [categoria]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'No se encontraron monturas en esta categoría' });
        }

        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener monturas por categoría: ' + err.message });
    }
};

module.exports = { getMonturas, getMonturasByCategoria };
