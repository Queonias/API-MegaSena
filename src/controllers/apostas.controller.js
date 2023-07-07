// const Apostas = require('../models/aposta.model');
// const Tabela3 = require('../models/newApostas.model');
const { getAll } = require('../services/apostasSalve.service');

const getAllApostas = async (req, res) => {
    const skipAmount = req.query.skip || 0; 
    const apostas = await getAll(skipAmount);
    res.status(200).json(apostas);
}

module.exports = {
    getAllApostas,
}