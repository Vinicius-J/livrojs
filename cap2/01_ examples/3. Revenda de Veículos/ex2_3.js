function mostrarPromocao(){
  // cria referência aos elementos manipulados pelo programa
  const inVeiculo = document.getElementById("inVeiculo");
  const inPreco = document.getElementById("inPreco");
  const outVeiculo = document.getElementById("outVeiculo");
  const outEntrada = document.getElementById("outEntrada");
  const outParcela = document.getElementById("outParcela");

  // obtém conteúdo dos campos de entrada
  const veiculo = inVeiculo.value;
  const preco = inPreco.value;

  // calcula valor da entrada e das parcelas
  const entrada = preco * 0.50;
  const parcela = (preco * 0.50) / 12;

  // altera o conteúdo dos parágrafos de resposta
  outVeiculo.textContent = `Promoção: ${veiculo}`;
  outEntrada.textContent = `Entrada de R$: ${entrada.toFixed(2)}`;
  outParcela.textContent = `+ 12x de R$: ${parcela.toFixed(2)}`;
}

// cria uma referência ao elemento btVerPromocao (botão)
const btVerPromocao = document.getElementById("btVerPromocao");

// registra um evento associado ao botão, para carregar uma função
btVerPromocao.addEventListener('click', mostrarPromocao);
