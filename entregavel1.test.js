
const { eprimo } = require('./seuarquivo.js'); // Substitua 'seuarquivo.js' pelo nome do seu arquivo

test('Verifica se 17 é primo', () => {
  expect(eprimo(17)).toBe(true);
});

test('Verifica se 4 não é primo', () => {
  expect(eprimo(4)).toBe(false);
});