// cria referência ao botão
const btExibir = document.getElementById("btExibir");

// ao clicar no botão, a programação da função anônima é executada
btExibir.addEventListener('click', function () {
  // cria referência aos elementos da página
  const inPreco = document.getElementById("inPreco");
  const outParcelas = document.getElementById("outParcelas");

  // obtém o conteúdo do campo de entrada
  let preco = Number(inPreco.value);

  // vai acumular as formas de pagamento
  let lista = "";

  // cria repetição para montar as opções de pagamento
  for (i = 1; i <= 10; i++) {
    // acumula em lista o n° da parcela e o cálculo do valor
    lista += `${i}x de R$: ${(preco / i).toFixed(2)}\n`;
  }

  // exibe a lista no elemento outParcelas
  outParcelas.textContent = `Opções de Pagamento \n\n${lista}`;
});