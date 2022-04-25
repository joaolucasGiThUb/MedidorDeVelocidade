/*
--Medidor de velocidade com calculo de pontos na carteira.--
Regras: Até 70km a velocidade esta Ok.
Regras: A cada 5k a cima da velocidade permitida custa 1 ponto.
Regras: A cima de 12 pontos a carteira está suspensa.
*/
verificarVelocidade(80)

function verificarVelocidade(velocidade) {
  const velocidadeMax = 70;
  const kmPorPonto = 5;
  const pontosMaxKm = 12;
  
  if (velocidade <= velocidadeMax)
    console.log('OK');
  else {
    //tratamento pontos.
    const pontos = Math.floor((velocidade - velocidadeMax) / kmPorPonto)
    if (pontos >= pontosMaxKm)
      console.log('Carteira suspensa! ', pontos, 'pontos')
    if (velocidade > velocidadeMax)
      console.log('Você está acima da velocidade permitida!')
  }
}