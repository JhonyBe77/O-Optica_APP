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

const insertMonturas = async (req, res) => {
    try {
        const monturas = req.body; // Array de monturas recibido
        //función para asegurarte de que los datos de scraper se están recibiendo
        //console.log("Datos recibidos en el backend:", monturas); 
        const resultados = await monturaModel.insertMonturas(monturas);
        res.status(201).json({ message: 'Monturas insertadas correctamente', resultados });
    } catch (err) {
        res.status(500).json({ error: 'Error al insertar monturas: ' + err.message });
    }
};


module.exports = { getMonturas, insertMonturas}