const mongoose = require('mongoose');

const detalhesJogosSchema = new mongoose.Schema({
    concurso: Number,
    ganhadores_faixa_1: Number,
    ganhadores_faixa_2: Number,
    ganhadores_faixa_3: Number,
    rateio_faixa_1: Number,
    rateio_faixa_2: String,
    rateio_faixa_3: String,
    cidade: String,
    valor_arrecadado: Number,
    estimativa_para_o_proximo_concurso: Number,
    valor_acumulado_proximo_concurso: String,
    acumulado: String,
    sorteio_especial: String,
    observacao: String
});

const detalhesJogos = mongoose.model('DetalhesJogos', detalhesJogosSchema, 'detalhesMega');

module.exports = detalhesJogos;