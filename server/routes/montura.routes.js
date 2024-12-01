const monturaController = require("../controller/montura.controller");
const router = require('express').Router();

// Obtener todas las monturas
router.get('/', monturaController.getMonturas);

// buscar monturas
router.get('/buscar', monturaController.buscarMonturas);

// Monturas por categoría
router.get('/categoria/:categoria', monturaController.getMonturasByCategoria);

console.log("Rutas registradas correctamente");

module.exports = router;
