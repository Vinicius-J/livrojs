let criancas = []; // declara vetor global

function adicionarCriancas() {
  // cria referência aos elementos (campos) de entrada de dados
  const inNome = document.getElementById("inNome");
  const inIdade = document.getElementById("inIdade");

  // obtém conteúdo dos campos
  let nome = inNome.value;
  let idade = Number(inIdade.value);

  // verifica preenchimento dos campos
  if (nome == '' || inIdade.value == '' || isNaN(idade)) {
    alert('Informe corretamente os dados');
    inNome.focus();
    return;
  }

  // adiciona dados ao vetor de objetos
  criancas.push({ nome: nome, idade: idade });

  // limpa campos e posiciona cursor em inNome
  inNome.value = '';
  inIdade.value = '';
  inNome.focus();

  listarCriancas(); // chama function que lista as crianças
}

// cria referência ao btAdicionar e associa function ao evento click
const btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener('click', adicionarCriancas);

function listarCriancas() {
  // verifica se vetor está vazio
  if (criancas.length == 0) {
    alert('Não há crianças na lista');
    return;
  }

  let lista = ''; // para concatenar lista de crianças

  // percorre os elementos do vetor
  for (i = 0; i < criancas.length; i++) {
    lista += `${criancas[i].nome} - ${criancas[i].idade} anos\n`;
  }

  // exibe a lista (em uma única instrução)
  document.getElementById('outLista').textContent = lista;
}

const btListar = document.getElementById('btListar');
btListar.addEventListener('click', listarCriancas);

function resumirLista() {
  // verifica se vetor está vazio
  if (criancas.length == 0) {
    alert('Não há crianças na lista');
    return;
  }

  // cria uma cópia do vetor crianças
  let copia = criancas.slice();

  // ordena vetor copia pela idade
  copia.sort(function (a, b) { return a.idade - b.idade });

  let resumo = ''; // para concatenar saída

  let aux = copia[0].idade; // menor idade do vetor ordenado
  let nomes = []; // vetor para inserir nomes de cada idade

  // percorre os elementos do vetor (classificado por idade)
  for (i = 0; i < copia.length; i++) {
    // se é da mesma idade auxiliar, adiciona ao vetor
    if (copia[i].idade == aux) {
      nomes.push(copia[i].nome);
    } else {
      // senão, adiciona ao resumo, dados e nomes inseridos em nomes[]
      resumo += `${aux} ano(s): ${nomes.length} criança(s) - `;
      resumo += `${(nomes.length / copia.length * 100).toFixed(2)}%\n`;
      resumo += `(${nomes.join(', ')})\n\n`;
      aux = copia[i].idade; // obtém a nova idade na ordem
      nomes = []; // limpa o veto nomes
      nomes.push(copia[i].nome); // adiciona o primeiro da nova idade
    }
  }

  // adiciona os nomes da última idade ordenada
  resumo += `${aux} ano(s): ${nomes.length} criança(s) - `;
  resumo += `${(nomes.length / copia.length * 100).toFixed(2)}%\n`;
  resumo += `(${nomes.join(', ')})\n\n`;

  // altera conteúdo de outLista
  document.getElementById('outLista').textContent = resumo;
}

const btResumir = document.getElementById("btResumir");
btResumir.addEventListener('click', resumirLista);