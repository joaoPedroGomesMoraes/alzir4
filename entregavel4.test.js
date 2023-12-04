const { calcularMDC } = require('./seuarquivo4.js'); // Substitua 'seuarquivo.js' pelo nome do seu arquivo

test('Calcula corretamente o MDC de 36 e 48', () => {
  const numero1 = 36;
  const numero2 = 48;
  const resultadoEsperado = 12;
  const resultadoReal = calcularMDC(numero1, numero2);

  expect(resultadoReal).toBe(resultadoEsperado);
});