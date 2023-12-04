const { quicksort } = require('./seuarquivo5.js'); // Substitua 'seuarquivo.js' pelo nome do seu arquivo

test('Ordena corretamente um array', () => {
  const arrayParaOrdenar = [7, 2, 1, 6, 8, 5, 3, 4];
  const arrayOrdenado = quicksort(arrayParaOrdenar);
  const arrayEsperado = [1, 2, 3, 4, 5, 6, 7, 8];

  expect(arrayOrdenado).toEqual(arrayEsperado);
});