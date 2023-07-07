const express = require('express');
const apostas = require('../controllers/apostas.controller');

const router = express.Router();

router.get('/', apostas.getAllApostas);

module.exports = router;