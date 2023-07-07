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

  const obj ={
    Conc: 2503,
    Data: '23/07/2022',
    a: 3,
    b: 14,
    c: 16,
    d: 38,
    e: 43,
    f: 45,
    Gan: 1,
    'Prêmio': '13748083,57',
    Apostas: 11507255
  }
  
  const newObj = obj['Prêmio'];
  console.log(newObj);
  

module.exports = transformObject;