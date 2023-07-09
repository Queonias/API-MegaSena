function transformObject(obj) {
    const { sorteio } = obj;
    const { Conc, Data, Gan, Apostas } = obj._doc;
    const newObj = {
      Conc,
      Data,
      Gan,
      Apostas,
      sorteio,
    };
  
    return newObj;
  }

module.exports = transformObject;