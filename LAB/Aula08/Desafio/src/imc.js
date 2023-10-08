function calcularIMC(peso, altura) {
    if (!altura) {
      return 'NaN';
    }
  
    const alturaMetros = altura / 100;
    const imc = (peso / (alturaMetros * alturaMetros)).toFixed(2);
    let categoria = '';
  
    if (imc < 18.5) {
      categoria = 'Abaixo do Peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      categoria = 'Peso Normal';
    } else if (imc >= 25 && imc < 29.9) {
      categoria = 'Sobrepeso';
    } else {
      categoria = 'Obeso';
    }
  
    return { imc, categoria };
  }
  
  module.exports = { calcularIMC };
  