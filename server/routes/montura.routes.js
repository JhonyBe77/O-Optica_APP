const monturaController = require("../controller/montura.controller");
const router = require('express').Router();
const express = require('express');

router.get('/', monturaController.getMonturas);



module.exports = router;