const monturaController = require("../controller/montura.controller");
const router = require('express').Router();
const express = require('express');

router.get('/', monturaController.getMonturas);
// ruta para obtener por categorías
router.get('/categoria/:categoria', monturaController.getMonturasByCategoria);



module.exports = router;