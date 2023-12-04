const { sequenciaFibonacci } = require('./seuarquivo3.js'); // Substitua 'seuarquivo.js' pelo nome do seu arquivo

test('Gera corretamente os primeiros termos da sequência de Fibonacci para n = 8', () => {
  const n = 8;
  const resultadoEsperado = [0, 1, 1, 2, 3, 5, 8, 13, 21];
  const resultadoReal = sequenciaFibonacci(n);

  expect(resultadoReal).toEqual(resultadoEsperado);
});