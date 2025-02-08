// declara vetor global
let pacientes = [];

// cria referência aos elementos de entrada e saída de dados da página
const inPaciente = document.getElementById("inPaciente");
const outAtendimento = document.getElementById("outAtendimento");
const outLista = document.getElementById("outLista");

function adicionarPaciente() {
  // obtém o nome do paciente
  let nome = inPaciente.value;

  // verifica preenchimento do nome do paciente
  if (nome == "") {
    alert('Informe o nome do paciente');
    inPaciente.focus();
    return;
  }

  pacientes.push(nome); // adiciona o nome no final do vetor

  let lista = ""; // string para concatenar pacientes

  // percorre os elementos do vetor
  for (i = 0; i < pacientes.length; i++) {
    lista += `${i + 1}. ${pacientes[i]} \n`;
  }

  // altera o conteúdo da tag outLista
  outLista.textContent = lista;

  // limpa campo e posiciona cursor em inPaciente
  inPaciente.value = '';
  inPaciente.focus();
}

// cria referência ao btAdicionar e associa function ao evento click
const btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener('click', adicionarPaciente);

// function para adicionar no início da lista de atendimento
function urgenciaPaciente() {
  // obtém o nome do paciente
  let nome = inPaciente.value;

  // verifica preenchimento do nome do paciente
  if (nome == "") {
    alert('Informe o nome do paciente');
    inPaciente.focus();
    return;
  }

  pacientes.unshift(nome); // adiciona o nome no início do vetor

  let lista = ""; // string para concatenar pacientes

  // percorre os elementos do vetor
  for (i = 0; i < pacientes.length; i++) {
    lista += `${i + 1}. ${pacientes[i]} \n`;
  }

  // altera o conteúdo da tag outLista
  outLista.textContent = lista;

  // limpa campo e posiciona cursor em inPaciente
  inPaciente.value = '';
  inPaciente.focus();
}

// cria referência ao btAdicionar e associa function ao evento click
const btUrgencia = document.getElementById("btUrgencia");
btUrgencia.addEventListener('click', urgenciaPaciente);

// function para atender o paciente
function atenderPaciente() {
  // verifica se vetor pacientes está vazio
  if (pacientes.length == 0) {
    alert('Não há pacientes na lista de espera');
    inPaciente.focus();
    return;
  }

  // remove paciente do início da fila (e obtém nome)
  let atender = pacientes.shift();
  // exibe nome do paciente em atendimento
  outAtendimento.textContent = atender;

  // string para concatenar pacientes
  let lista = '';

  // percorre os elementos do vetor
  for(i = 0; i < pacientes.length; i++){
    lista += `${i + 1}. ${pacientes[i]} \n`;
  }

  // altera o conteúdo da tag outLista
  outLista.textContent = lista;
}

// cria referência ao btAtender e associa function ao evento click
const btAtender = document.getElementById("btAtender");
btAtender.addEventListener('click', atenderPaciente);