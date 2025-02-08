function listarNumero() {
  // cria referência aos elementos que a function irá manipular
  const inNumero = document.getElementById("inNumero");
  const outResposta = document.getElementById("outResposta");

  // obtém o número informado
  let numero = Number(inNumero.value);

  // verifica validade do número
  if (numero == 0 || isNaN(numero)) {
    alert("Informe um número válido...");
    inNumero.focus();
    return;
  }

  // inicializa variável resposta
  let resposta = `Entre ${numero} e 1: ${numero}`;

  // cria um loop for descrescente
  for (let i = numero - 1; i > 0; i--) {
    // resposta vai acumulando números (e vírgulas)
    resposta = `${resposta}, ${i}`;
  }
  resposta = `${resposta}.`;

  // altera o conteúdo de outResposta
  outResposta.textContent = resposta;
}

// referencia elemento e após associa function ao evento click
const btDecrescer = document.getElementById("btDecrescer");
btDecrescer.addEventListener('click', listarNumero);