const mongoose = require('mongoose');

const tabela1Schema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  Conc: Number,
  Data: String,
  a: Number,
  b: Number,
  c: Number,
  d: Number,
  e: Number,
  f: Number,
  Gan: Number,
  Apostas: Number,
  Premio: Number,
});

const TabelaFont = mongoose.model('TableFont', tabela1Schema, 'newTable');

module.exports = TabelaFont;