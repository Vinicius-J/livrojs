function calcularNotas() {
  // cria uma referência aos elementos da página
  const inSaque = document.getElementById("inSaque");
  const outNotaCem = document.getElementById("outNotaCem");
  const outNotaCinquenta = document.getElementById("outNotaCinquenta");
  const outNotaDez = document.getElementById("outNotaDez");

  // limpa mensagens (caso, segunda execução)
  outNotaCem.textContent = "";
  outNotaCinquenta.textContent = "";
  outNotaDez.textContent = "";

  let saque = Number(inSaque.value); // converte conteúdo do campo inSaque

  // se não preencheu ou Not-a-Number (NaN)
  if (saque == 0 || isNaN(saque)) {
    alert('Informe o valor do saque corretamente'); // exibe alerta
    inSaque.focus(); // posiciona em inSaque
    return;
  }

  // verifica se saque não é multiplo de 10
  if (saque % 10 != 0) {
    alert('Valor inválido para notas disponíveis (R$ 10, 50, 100');
    inSaque.focus();
    return;
  }

  // calcula notas de 100, 50 e 10
  let notasCem = Math.floor(saque / 100);
  let resto = saque % 100;
  let notasCinquenta = Math.floor(resto / 50);
  resto = resto % 50;
  let notasDez = Math.floor(resto / 10);

  // exibe as notas apenas se houver
  if (notasCem > 0) {
    outNotaCem.textContent = `Notas de R$ 100: ${notasCem}`;
  }
  if (notasCinquenta > 0) {
    outNotaCinquenta.textContent = `Notas de R$ 50: ${notasCinquenta}`;
  }
  if (notasDez > 0) {
    outNotaDez.textContent = `Notas de R$ 10: ${notasDez}`;
  }
}

// cria referência ao elemento btExibir e associa function ao evento click
const btExibir = document.getElementById("btExibir");
btExibir.addEventListener('click', calcularNotas);