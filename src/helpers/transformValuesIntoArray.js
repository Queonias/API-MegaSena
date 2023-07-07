function transformValuesIntoArray(objeto) {
    const chaves = ["a", "b", "c", "d", "e", "f"];
    const arrayValores = chaves.map(chave => objeto[chave]);
    return arrayValores;
  }

  module.exports = transformValuesIntoArray;
  