const monturaModel = require('../models/montura.model');

const getMonturas = async (req, res) => {
    try {
        const monturas = await monturaModel.getAllMonturas();
        res.status(200).json(monturas);
    } catch (err) {
        console.error('Error en getMonturas:', err.message);
        res.status(500).json({ error: 'Error al obtener monturas: ' + err.message });
    }
};

const buscarMonturas = async (req, res) => {
    const { term, categoria } = req.query;
    console.log(`Parámetros recibidos: term=${term}, categoria=${categoria}`); 
    try {
        const monturas = await monturaModel.buscarMonturas(term, categoria);
        if (monturas.length === 0) {
            return res.status(404).json({ error: 'No se encontraron monturas con los filtros proporcionados' });
        }
        res.status(200).json(monturas);
    } catch (err) {
        console.error('Error en buscarMonturas:', err.message);
        res.status(500).json({ error: 'Error al buscar monturas: ' + err.message });
    }
};

const getMonturasByCategoria = async (req, res) => {
    const { categoria } = req.params;
    console.log(`Categoría solicitada: ${categoria}`); 

    try {
        const monturas = await monturaModel.getMonturasByCategoria(categoria);
        if (monturas.length === 0) {
            return res.status(404).json({ error: 'No se encontraron monturas en esta categoría' });
        }
        res.status(200).json(monturas);
    } catch (err) {
        console.error('Error en getMonturasByCategoria:', err.message);
        res.status(500).json({ error: 'Error al obtener monturas por categoría: ' + err.message });
    }
};

module.exports = {
    getMonturas,             
    buscarMonturas,          
    getMonturasByCategoria,  
};
