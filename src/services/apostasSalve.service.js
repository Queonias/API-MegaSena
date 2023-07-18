const convertData = require('../utils/helpers/convertDate');
const transformValuesIntoArray = require('../utils/helpers/transformValuesIntoArray');

const { HttpsException } = require('../utils/errors');
const { NOT_FOUND, INTERNAL_SERVER_ERROR } = require('../utils/helpers/statusCode');

const Apostas = require('../models/aposta.model');
const Tabela3 = require('../models/newApostas.model');
const DetalhesMega = require('../models/detalhesJogos.model');


const salveApostasArry = async () => {
  const apostasSalvas = await Apostas.find({});
  const editedApostas = apostasSalvas.map((s) => ({
    Numeros: transformValuesIntoArray(s),
    Data: convertData(s.Data),
    Conc: s.Conc,
    Gan: s.Gan,
    Apostas: s.Apostas,
    Premio: s.Premio,
  }));

  await Promise.all(
    editedApostas.map(async (a) => {
      const newApostas = new Tabela3({ ...a });
      await newApostas.save();
    })
  );
};

const getAll = async (skipAmount) => {
  try {
    const resultados = await Tabela3.find({}, { __v: 0 })
      .sort({ Conc: -1 })
      .skip(parseInt(skipAmount))
      .limit(25)
      .exec();
    return resultados;
  } catch (error) {
    throw new HttpsException(INTERNAL_SERVER_ERROR, 'Nenhum resultado encontrado.');
  }
};

const getCountServer = async () => {
  try {
    const resultados = await Tabela3.find({}).countDocuments({});
    return resultados;
  } catch (error) {
    throw new HttpsException(INTERNAL_SERVER_ERROR, 'Nenhum resultado encontrado.');
  }
};

const getDetailsServer = async (id) => {
  try {
    const [resultDetalhesMega, resultTabela3] = await Promise.all([
      DetalhesMega.findOne({ concurso: id }),
      Tabela3.findOne({ Conc: id }),
    ]);

    if (!resultDetalhesMega || !resultTabela3) {
      throw new HttpsException(NOT_FOUND, 'Nenhum resultado encontrado.');
    }
    return [resultDetalhesMega, resultTabela3];
  } catch (err) {
    throw new HttpsException(INTERNAL_SERVER_ERROR, 'Nenhum resultado encontrado.');
  }
};

const getAllDetailsServer = async (limit) => {
  try {
    const resultados = await DetalhesMega.find()
      .sort({ concurso: -1 })
    //   .limit(limit)
      .exec();
    if (!resultados) {
      throw new HttpsException(NOT_FOUND, 'Nenhum resultado encontrado.');
    }
    return resultados;
  } catch (err) {
    throw new HttpsException(INTERNAL_SERVER_ERROR, 'Nenhum resultado encontrado.');
  }
};

module.exports = {
  salveApostasArry,
  getAll,
  getCountServer,
  getDetailsServer,
  getAllDetailsServer,
};
