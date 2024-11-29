const userController = require("../controller/user.controller");
const router = require('express').Router();
const express = require('express');

router.get('/', userController.getUsers);

router.post('/login', userController.login);


module.exports = router;
