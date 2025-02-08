function calcularPreco(){
  // cria referência aos elementos da página
  const inQuilo = document.getElementById("inQuilo");
  const inConsumo = document.getElementById("inConsumo");
  const outValor = document.getElementById("outValor");

  // obtém conteúdo dos campos de entrada
  const quilo = inQuilo.value;
  const consumo = inConsumo.value;

  // calcula valor a ser pago
  const valor = (quilo / 1000) * consumo;

  // altera o conteúdo da linha de resposta
  outValor.textContent = `Valor a pagar R$: ${valor.toFixed(2)}`;
}

// cria referência ao elemento btCalcular
const btCalcular = document.getElementById("btCalcular");

// registra um evento associado ao botão, para carregar uma função
btCalcular.addEventListener('click', calcularPreco);
