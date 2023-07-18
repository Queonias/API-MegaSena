const express = require('express');
const apostas = require('../controllers/apostas.controller');

const router = express.Router();

router.get('/', apostas.getAllApostas);
router.get('/count', apostas.getCount);
router.get('/details', apostas.getAllDetails);
router.get('/details/:id', apostas.getDetails);

module.exports = router;