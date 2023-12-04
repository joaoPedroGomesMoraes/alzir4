function contarValoresInteiros(primeiroDado, N) {
    let contador = 0;
  
    for (let i = primeiroDado; i <= N; i++) {
      contador++;
    }
  
    return contador;
  }
  
  module.exports = { contarValoresInteiros };