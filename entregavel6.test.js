const { contarValoresInteiros } = require('./seuarquivo6.js'); // Substitua 'seuarquivo.js' pelo nome do seu arquivo

test('Conta corretamente a quantidade de valores inteiros entre 5 e 15', () => {
  const primeiroDado = 5;
  const N = 15;
  const quantidadeEsperada = 11; // 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
  const quantidadeReal = contarValoresInteiros(primeiroDado, N);

  expect(quantidadeReal).toBe(quantidadeEsperada);
});