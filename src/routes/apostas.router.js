const express = require('express');
const apostas = require('../controllers/apostas.controller');

const router = express.Router();

router.get('/', apostas.getAllApostas);
router.get('/count', apostas.getCount);

module.exports = router;