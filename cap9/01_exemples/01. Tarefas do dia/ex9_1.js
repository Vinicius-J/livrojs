function adicionarTarefa() {
  // cria referência ao campo de entrada de dados
  const inTarefa = document.getElementById("inTarefa");

  let tarefa = inTarefa.value; // obtém o conteúdo digitado

  // se não informou ...
  if (tarefa == '') {
    alert("Informe a tarefa"); // exibe alerta
    inTarefa.focus(); // posiciona no campo inTarefa
    return; // retorna
  }

  // cria referência ao elemento divQuadro (local onde taga h5 será inserida)
  const divQuadro = document.getElementById("divQuadro");
  const h5 = document.createElement("h5"); // cria o elemento HTML h5
  const texto = document.createTextNode(tarefa); // cria um texto
  h5.appendChild(texto); // define que o texto será filho de h5 ...
  divQuadro.appendChild(h5); // ... e que h5 será filho de divQuadro

  inTarefa.value = ""; // limpa o campo de edição
  inTarefa.focus(); // joga cursor neste campo
}

// cria referência ao btAdicionar e após associa evento à função
const btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarTarefa);

function selecionarTarefa() {
  const h5 = document.getElementsByTagName("h5"); // obtém tags h5 da página
  let numH5 = h5.length; // obtém número de tags h5

  if (numH5 == 0) { // se zero ...
    alert("Não há tarefas para selecionar"); // ... exibe alerta
    return; // retorna
  }

  let aux = -1; // variável auxiliar para indicar linhas selecionada

  // percorre a lista de elementos h5 inseridos na página
  for (i = 0; i < numH5; i++) {
    // se tag é da class tarefaSelecionada (está selecionada)
    if (h5[i].className == "tarefaSelecionada") {
      h5[i].className = "tarefaNormal"; // troca para normal
      aux = i; // muda valor da variável auxiliar
      break; // sai da repetição
    }
  }
  // se a linha que está selecionada é última, irá voltar para a primeira
  if (aux == numH5 - 1) {
    aux = -1;
  }

  h5[aux + 1].className = "tarefaSelecionada"; // musa estilo da próxima tag h5
}

// cria referência ao btSelecionar e após associa evento à função
const btSelecionar = document.getElementById("btSelecionar");
btSelecionar.addEventListener("click", selecionarTarefa);

function retirarSelecionada() {
  // cria referência ao elemento que irá "perder" um filho
  const divQuadro = document.getElementById("divQuadro");
  const h5 = document.getElementsByTagName("h5"); // obtém tags h5 da página
  let numH5 = h5.length; // obtém quantidade de h5
  let aux = -1; // variável auxiliar para indicar linha selecionada

  // percorre a lista de elementos h5 inseridos na página
  for (i = 0; i < numH5; i++) {
    // verifica className da tag h5
    if (h5[i].className == "tarefaSelecionada") { // se selecionada
      aux = i; // muda valor da variável aux
      break; // sai da repetição
    }
  }

  // se não há tarefa selecionada (ou se lista vazia...)
  if (aux == -1) {
    alert("Selecione uma tarefa para removê-la...");
    return;
  }

  // solicita confirmação (exibindo o conteúdo da tag h5 selecionada)
  if (confirm(`Confirma Exclusão de "${h5[aux].textContent}" ?`)) {
    divQuadro.removeChild(h5[aux]); // remove um dos filhos de divQuadro
  }
}

// cria referência ao btRetirar e após associa evento à função
const btRetirar = document.getElementById("btRetirar");
btRetirar.addEventListener("click", retirarSelecionada);

function gravarTarefas() {
  const h5 = document.getElementsByTagName("h5"); // obtém tags h5 da página
  let numH5 = h5.length; // obtém quantidade de h5

  if (numH5 == 0) { // se zero ...
    alert("Não há tarefas para serem salvas"); // exibe alerta
    return; // retorna
  }

  let tarefas = ""; // irá "acumultar" as tarefas

  // percorre a lista de elementos h5 inseridos na página
  for (i = 0; i < numH5; i++) {
    tarefas += h5[i].textContent + ";"; // acumula conteúdo de cada h5
  }

  // grava as tarefas em localStorage, removendo o último ";"
  localStorage.setItem("tarefasDia", tarefas.substring(0, tarefas.length - 1));

  // confere se dados foram armazenados em localStorage
  if (localStorage.getItem("tarefasDia")) {
    alert("Ok! Tarefas Salvas");
  }
}

// cria referência ao btGravar e após associa evento à função
const btGravar = document.getElementById("btGravar");
btGravar.addEventListener("click", gravarTarefas);

function recuperarTarefasSalvas() {
  // verifica se há tarefas salvas no navegador do usuário
  if (localStorage.getItem("tarefasDia")) {
    // cria um vetor com a lista de tarefas (separdas pelo split(";"))
    let tarefas = localStorage.getItem("tarefasDia").split(";");

    // cria referência ao divQuadro (local onde as tags h5 serão inseridas)
    const divQuadro = document.getElementById("divQuadro");

    // percorre todas as tarefas 
    for (i = 0; i < tarefas.length; i++) {
      let h5 = document.createElement("h5"); // cria elemento HTML
      let texto = document.createTextNode(tarefas[i]); // cria um texto

      h5.appendChild(texto); // define que texto será filho de h5 ...
      divQuadro.appendChild(h5); // ...e que o h5 é filho de divQuadro
    }
  }
}

recuperarTarefasSalvas();

