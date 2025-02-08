let people = []; // cria escopo global para os candidatos

// faz referência aos elementos usados nas functions
const inName = document.getElementById("inName");
const inNote = document.getElementById("inNote");

function addCandidate() {
  // pega o conteúdo dos elementos
  let name = inName.value;
  let note = Number(inNote.value);

  // verifica se é nome e nota válida
  if (name == '' || note == '' || isNaN(note)) {
    alert('Informe os dados corretamente');
    inName.focus();
    return;
  }

  // adiciona os valores no vetor global
  people.push({ name: name, note: note });

  // esvazia o conteúdo dos elementos e foca no inName
  inName.value = '';
  inNote.value = '';
  inName.focus();

  // chama a function que vai listar os candidatos
  listCandidate();
}

// referencia o btnAdd e associa function ao click
const btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener('click', addCandidate);

function listCandidate() {
  // verifica se o vetor está vazio
  if (people.length == 0) {
    alert('Não há candidatos na lista');
    inName.focus();
    return;
  }

  // concatena a lista com os candidatos e notas
  let list = '';

  // faz o loop para cria a lista
  for (i = 0; i < people.length; i++) {
    list += `${people[i].name} - ${people[i].note} acertos\n`;
  }

  // faz referência a altera o valor de outList
  document.getElementById("outList").textContent = list;
}

// referencia o btnList e associa function ao click
const btnList = document.getElementById("btnList");
btnList.addEventListener('click', listCandidate);

function approveCandidate() {
  // verifica se há candidatos na lista
  if (people.length == 0) {
    alert('Não há candidatos na lista');
    inName.focus();
    return;
  }

  // pega a nota miníma para passar
  const minNote = Number(prompt('Número de Acertos para Aprovação?'));

  // cria uma cópia na ordem decrescente e depois cria o vetor para concatenar
  let copia = people.slice().sort(function (a, b) { return a.note - b.note }).reverse();
  let list = '';

  // faz a verificação das notas
  for (i = 0; i < copia.length; i++) {
    if (copia[i].note >= minNote) {
      list += `${copia[i].name} - ${copia[i].note}\n`
    }
  }

  // faz referência a altera o valor de outList
  document.getElementById("outList").textContent = list;
}

// referencia o btnSecondStage e associa function ao click
const btnSecondStage = document.getElementById("btnSecondStage");
btnSecondStage.addEventListener('click', approveCandidate);