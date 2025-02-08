function calcularValor(){
  // faz referências aos itens da página (input e output)
  const inValorHr = document.getElementById("inValorHr");
  const inTempoDeUso = document.getElementById("inTempoDeUso");
  const outValor = document.getElementById("outValor");

  // pega os valores da referência
  const valor15Min = Number(inValorHr.value);
  const tempoDeUso = inTempoDeUso.value;

  // faz o cálculo
  const valor = Math.ceil(tempoDeUso / 15) * valor15Min;

  // coloca o resultado na tela
  outValor.textContent = `Valor a Pagar R$: ${valor.toFixed(2)}`;
};

// faz referência ao botão para acionar a função
const btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener('click', calcularValor);
