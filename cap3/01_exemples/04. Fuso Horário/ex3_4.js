function calcularFuso() {
  // cria uma referência aos elementos da página
  const inHoraBrasil = document.getElementById("inHoraBrasil");
  const outHoraFranca = document.getElementById("outHoraFranca");

  // obtém e converte o conteúdo do campo inHoraBrasil
  let horaBrasil = Number(inHoraBrasil.value);

  // se não preencheu ou Not-a-Number (NaN)
  if (inHoraBrasil.value == "" || isNaN(horaBrasil)) {
    alert("Informe a hora no Brasil corretamente"); // exibe alerta
    inHoraBrasil.focus() // posiciona em inHoraBrasil
    return;
  }

  let horaFranca = horaBrasil + 5; // calcula o horário na França

  // se passar das 24 horas na França ...
  if (horaFranca > 24) {
    horaFranca = horaFranca - 24; // ... subtrai 24
  }

  // exibe resposta (altera conteúdo do elemento outHoraFranca)
  outHoraFranca.textContent = `Hora na França: ${horaFranca.toFixed(2)}`;
}

// cria uma referência ao elemento btExibir e registra evento associado a function
const btExibir = document.getElementById("btExibir");
btExibir.addEventListener('click', calcularFuso);

