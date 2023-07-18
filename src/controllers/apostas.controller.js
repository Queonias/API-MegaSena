const { 
    getAll, 
    getCountServer, 
    getDetailsServer, 
    getAllDetailsServer 
} = require('../services/apostasSalve.service');

const getAllApostas = async (req, res) => {
    const skipAmount = req.query.skip || 0; 
    const apostas = await getAll(skipAmount);
    res.status(200).json(apostas);
};

const getCount = async (_req, res) => {
    const quantity = await getCountServer();
    res.status(200).json(quantity);
};

const getDetails = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const details = await getDetailsServer(id);
        res.status(200).json(details);
    } catch (err) {
        return res.status(Number(err.stack)).json({ error: err.message });
    }
};

const getAllDetails = async (req, res) => {
    try {
        const limit = Number(req.query.limit);
        const allDetails = await getAllDetailsServer(limit);
        res.status(200).json(allDetails);
    } catch (err) {
        return res.status(Number(err.stack)).json({ error: err.message });
    }
};

module.exports = {
    getAllApostas,
    getCount,
    getDetails,
    getAllDetails,
}