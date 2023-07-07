const mongoose = require('mongoose');

const tabela1Schema = new mongoose.Schema({
  Conc: Number,
  Data: { type: Date },
  Numeros: [Number],
  Gan: Number,
  Apostas: Number,
  Premio: Number,
});

const Tabela3 = mongoose.model('Apostas', tabela1Schema, 'apostasMega');

module.exports = Tabela3;