const monturaModel = require('../models/montura.model');  // Importación del modelo Product


const getMonturas= async (req, res) => {
    let monturas;

    try {
        if (req.query.id) {
            monturas= await monturaModel.getUserById(req.query.id);
        } else { 
            monturas= await monturaModel.getAllMonturas();
        }
        res.json({ monturas: monturas});
    } catch (err) {

        res.status(500).json({ error: 'Error al obtener la montura: ' + err });
    }
};


module.exports = { getMonturas}