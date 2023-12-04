const { somatorio } = require('./seuarquivo2.js'); 
test('Calcula corretamente o somatório para [1, 2, 3, 4, 5]', () => {
  const numeros = [1, 2, 3, 4, 5];
  const resultadoEsperado = 15; 
  const resultadoReal = somatorio(numeros);

  expect(resultadoReal).toBe(resultadoEsperado);
});