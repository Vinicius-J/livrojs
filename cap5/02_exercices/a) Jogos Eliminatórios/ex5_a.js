let teams = []; // declara vetor global
const inTeam = document.getElementById("inTeam");

function addTeam() {
  // faz referência e pega conteúdo do inTeam
  let team = inTeam.value;

  // verificar se é válido
  if (team == '') {
    alert('Preencha corretamente os dados');
    inTeam.focus();
    return;
  }

  teams.push(team); // adiciona no final no vetor teams

  // limpa e foca no inTeam
  inTeam.value = '';
  inTeam.focus();

  // chama a function listTeams() para listar os times
  listTeams();
}

// faz referência ao botão btnAdd e aciona function com o click
const btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener('click', addTeam);

function listTeams() {
  // verifica se o vetor está vazio
  if (teams.length == 0) {
    alert('Não há times para listar');
    inTeam.focus();
    return;
  }

  // cria o vetor para concatenar a lista
  let list = '';

  // cria o loop para adicionar os times na lista
  for (i = 0; i < teams.length; i++) {
    list += `${i + 1}. ${teams[i]}\n`;
  }

  // faz referência a altera o valor do outList
  document.getElementById("outList").textContent = list;
}

// faz referência ao botão btnList e aciona function com o click
const btnList = document.getElementById("btnList");
btnList.addEventListener('click', listTeams);

function createTable() {
  // verifica se é possível montar os jogos corretamente
  if (teams.length % 2 != 0) {
    alert('Não é possível montar os jogos com número ímpar de times')
    inTeam.focus();
    return;
  }
  
  // cria uma cópia e inverte os valores
  let copiaReverse = teams.slice().reverse();

  let games = ''; // vai concatenar os jogos criados

  // cria o loop com base na metade do valor do vetor teams
  for (i = 0; i < teams.length / 2; i++) {
    games += `${teams[i]} x ${copiaReverse[i]}\n\n`;
  }

  // faz referência a altera o valor do outList
  document.getElementById("outList").textContent = games;
}

// faz referência ao botão btnList e aciona function com o click
const btnCreateTable = document.getElementById("btnCreateTable");
btnCreateTable.addEventListener('click', createTable);

