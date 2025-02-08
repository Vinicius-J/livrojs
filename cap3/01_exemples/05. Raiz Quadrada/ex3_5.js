function calcularRaiz() {
  // cria uma referência aos elementos da página
  const inNumero = document.getElementById("inNumero");
  const outResposta = document.getElementById("outResposta");

  // obtém o conteúdo do campos
  let numero = Number(inNumero.value);

  // se não preencheu ou Not-a-Number (NaN)
  if (numero == 0 || isNaN(numero)) {
    alert("Informe um número válido..."); // exibe alerta
    inNumero.focus(); // posiciona no campos inNumero
    return;
  }

  let raiz = Math.sqrt(numero); // calcula raiz quadrada do número

  // se valor da variável raiz igual a este valor arredondado para baixo...
  //! if (raiz % 1 == 0) {...}
  if (raiz == Math.floor(raiz)) {
    outResposta.textContent = `Raiz: ${raiz}`; // mostra a raiz
  } else {
    // senão, exibe mensagem indicando que não é raiz
    outResposta.textContent = `Não há raiz exata para ${numero}`;
  }
}

// cria referência ao elemento btExibir e registra evento que irá carregar function
const btExibir = document.getElementById("btExibir");
btExibir.addEventListener('click', calcularRaiz);