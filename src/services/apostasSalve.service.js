const Apostas = require('../models/aposta.model');
const Tabela3 = require('../models/newApostas.model');
const convertData = require('../utils/helpers/convertDate');
const transformValuesIntoArray = require('../utils/helpers/transformValuesIntoArray');

const salveApostasArry = async () => {
    const apostasSalvas = await Apostas.find({});
    const editedApostas = apostasSalvas.map((s) => ( { 
        Numeros: transformValuesIntoArray(s),
        Data: convertData(s.Data),
        Conc: s.Conc,
        Gan: s.Gan,
        Apostas: s.Apostas,
        Premio: s.Premio,
    }));

    editedApostas.map(async (a) => {
        const newApostas = new Tabela3({ ...a });
        await newApostas.save();
    });
}

const getAll = async (skipAmount) => {
    try {
        // consulta com skipAmount utilizando o MongoDB
        const resultados = await Tabela3
            .find({}, { __v: 0 })
            .sort({ Conc: -1 })
            .skip(parseInt(skipAmount))
            .limit(25).exec();
        return resultados;
      } catch (error) {
        console.error(error);
      }
    };

const getCountServer = async () => {
    try {
        const resultados = await Tabela3.find({}).countDocuments({});
        return resultados;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    salveApostasArry,
    getAll,
    getCountServer,
};