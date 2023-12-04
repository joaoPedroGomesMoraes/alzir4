function sequenciaFibonacci(n) {
    const sequencia = [0, 1];
  
    if (n <= 1) {
      return sequencia.slice(0, n + 1);
    }
  
    for (let i = 2; i <= n; i++) {
      const proximoTermo = sequencia[i - 1] + sequencia[i - 2];
      sequencia.push(proximoTermo);
    }
  
    return sequencia;
  }
  
  module.exports = { sequenciaFibonacci };