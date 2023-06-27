const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const megaSenaSchema = new Schema({
        Conc: String,
        Data: { type: Date, default: Date.now },
        a: Number,
        b: Number,
        c: Number,
        d: Number,
        e: Number,
        f: Number,
        Gan: Number,
        Apostas: Number
});

const MegaSenaModel = mongoose.model('Mega_Sena', megaSenaSchema);

async function consultarDadosDaColecao() {
    try {
      const dados = await MegaSenaModel.find();
      console.log(dados);
      // Resto do seu código aqui...
    } catch (error) {
      console.error('Erro ao consultar dados da coleção:', error);
    }
  }
  
  // Chamar a função para consultar os dados da coleção
  module.exports = consultarDadosDaColecao;
  