const { expect } = require('chai');
const { calcularIMC } = require('../src/imc');

describe('Calculadora de IMC', () => {
  it('Calculadora deve rodar tranquilo', () => {
    const peso = 80;
    const altura = 180;

    const IMEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado.imc).to.equal(IMEsperado);
  });

  it('altura = 0, entrada inadequada', () => {
    const peso = 70;
    const altura = 0;

    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal('NaN');
  });

  it('IMC entre 18.5 e 24.9 deve ser classificado como "Peso Normal"', () => {
    const peso = 70;
    const altura = 175;

    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado.categoria).to.equal('Peso Normal');
  });

  it('IMC acima de 30 deve ser classificado como "Obeso"', () => {
    const peso = 100;
    const altura = 160;

    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado.categoria).to.equal('Obeso');
  });
});
