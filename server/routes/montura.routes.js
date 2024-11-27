const monturaController = require("../controller/montura.controller");
const router = require('express').Router();
const express = require('express');

router.get('/', monturaController.getMonturas);
// ruta para insertar monturas en la tabla
router.post('/', monturaController.insertMonturas);



module.exports = router;