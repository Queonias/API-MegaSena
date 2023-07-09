const { getAll, getCountServer } = require('../services/apostasSalve.service');

const getAllApostas = async (req, res) => {
    const skipAmount = req.query.skip || 0; 
    const apostas = await getAll(skipAmount);
    res.status(200).json(apostas);
}

const getCount = async (_req, res) => {
    const quantity = await getCountServer();
    console.log(quantity);
    res.status(200).json(quantity);
}

module.exports = {
    getAllApostas,
    getCount
}