function createCitacao() {
  // cria referência aos elemetos usados na function
  const inName = document.getElementById("inName");
  const outCitacao = document.getElementById("outCitacao");

  let name = inName.value; // pega conteúdo do inName

  // verifica se está vazio ou sem sobrenome
  if (name == "" || name.indexOf(" ") == -1) {
    alert("Informe o nome corretamente");
    inName.value = "";
    inName.focus();
    return;
  }

  let partes = name.split(" "); // separa em um array
  let tam = partes.length; // pega o tanto de indíces do array
  let result = `Citação Bibliográfica: `; // inicializa a string que concatena
  let citação = []; // guarda a inicial do sobrenome
  // precorre o array e pega a primeira letra de cada sobrenome
  for (i = 0; i < tam - 1; i++) {
    citação.push(partes[i].charAt(0));
  };

  // concatena os resultados
  result += `${partes[tam - 1].toLocaleUpperCase()}, ${citação.join(". ").toUpperCase()}.`;

  // atltera o valor de outCitacao
  outCitacao.textContent = result;

  // deixa em branco e coloca foco no inNome
  inName.value = "";
  inName.focus();
}

// referência ao botão e associa a function com o click
const btnCreate = document.getElementById("btnCreate");
btnCreate.addEventListener('click', createCitacao);