function incluirApostas() {
  // cria referência aos elementos de entrada de dados da página
  const inNome = document.getElementById("inNome");
  const inPeso = document.getElementById("inPeso");

  let nome = inNome.value; // conteúdo do campo nome
  let peso = Number(inPeso.value); // conteúdo do campo peso (em número)

  // se vazrios ou Not-a-Number
  if (nome == "" || peso == 0 || isNaN(peso)) {
    alert("Informe nome e peso da aposta"); // exibe alerta
    inNome.focus(); // joga cursos em nome
    return; // abandona execução da function
  }

  // chama function que verifica se peso já foi apostado
  if (verApostaExiste(peso)) {
    alert("Alguém já apostou este peso, informe outro...");
    inPeso.value = '';
    inPeso.focus();
    return;
  }

  // se houver dados salvos no localStorage
  if (localStorage.getItem("melanciaNome")) {
    // obtém o conteúdo já salvo e acrescenta ";" + dados da aposta
    let melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome;
    let melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso;

    // salva os dados em localStorage
    localStorage.setItem("melanciaNome", melanciaNome);
    localStorage.setItem("melanciaPeso", melanciaPeso);
  } else { // senão, é a primeira aposta (não tem ";")
    localStorage.setItem("melanciaNome", nome); // salva dados
    localStorage.setItem("melanciaPeso", peso);
  }

  mostrarApostas(); // chama function que mostra as apostas já salvas

  inNome.value = ''; // limpa os campos de formulário
  inPeso.value = '';
  inNome.focus(); // joga foco (cursor) no campo inNome
}

// cria referência ao botão e associa a ocorrẽncia do evento click à function
const btApostar = document.getElementById("btApostar");
btApostar.addEventListener('click', incluirApostas);

function verApostaExiste(peso) {
  let existe = false; // valor inicial é false
  // se existe algum dado salvo em localSotorage
  if (localStorage.getItem("melanciaPeso")) {
    // o btém seu conteúdo. A string é dividida em itens de vetor a cada ";"
    let pesos = localStorage.getItem("melanciaPeso").split(";");

    // verifica se existe com indexOf
    // o peso deve ser convertido em string, pois o vetor contém strings
    if (pesos.indexOf(peso.toString()) >= 0) {
      existe = true; // apenas neste caso troca o valor do "flag"
    }
  }

  return existe; // retorna true ou false
}

function mostrarApostas() {
  // cria referência ao elemento que exibe as apostas
  const outApostas = document.getElementById("outApostas");

  // se não há apostas armazenadas em localStorage
  if (!localStorage.getItem("melanciaNome")) {
    // limpa o espaço de exibição das apostas (para quando "Limpar Apostas")
    outApostas.textContent = '';
    return; // retorna (não executa os comandos abaixo)
  }

  // obtém o conteúdo das variáveis salvas no localStorage, separando-as
  // em elemementos de vetor a cada ocorrência do ";"
  let nomes = localStorage.getItem("melanciaNome").split(";");
  let pesos = localStorage.getItem("melanciaPeso").split(";");

  let linhas = ""; // irá acumular as linhas a serem exibidas

  // repetição para percorres todos os elementos do vetor
  for (i = 0; i < nomes.length; i++) {
    // concatena em linhas os nomes dos apostadores e suas apostas
    linhas += `${nomes[i]} - ${pesos[i]} gr \n`;
  }

  // exibe as linhas (altera o conteúdo do elementos outApostas)
  outApostas.textContent = linhas;
}

// chama a function quando a página é carregada, para mostrar apostas salvas
mostrarApostas();

function verificarVencedor() {
  // se não há apostas armazenadas em localStorage
  if (!localStorage.getItem("melanciaNome")) {
    alert("Não há apostas cadastradas");
    return; // retorna (não executas os comandos abaixo)
  }

  // solicita o peso correto da melancia
  let pesoCorreto = Number(prompt("Qual o peso correto da melancia?"));

  // se não informou, retorna
  if (pesoCorreto == 0 || isNaN(pesoCorreto)) {
    return;
  }

  // obtém os dados armazenados, separando-os em elementos de vetor
  let nomes = localStorage.getItem("melanciaNome").split(";");
  let pesos = localStorage.getItem("melanciaPeso").split(";");

  // valor inicial para vencedor é o da primeira aposta
  let vencedorNome = nomes[0];
  let vencedorPeso = Number(pesos[0]);

  // percorre apostas
  for (i = 0; i < nomes.length; i++) {
    // calcula a diferença de peso do "vencedor" e da aposta atual
    difVencedor = Math.abs(vencedorPeso - pesoCorreto);
    difAposta = Math.abs(Number(pesos[i]) - pesoCorreto);

    // se diferença da aposta atual (no for) for menor que a do "vencedor";
    if (difAposta < difVencedor) {
      vencedorNome = nomes[i]; // troca o "vencedor"
      vencedorPeso = Number(pesos[i]); // para este elemento
    }
  }

  // monta mensagem com dados do vencedor
  let mensagem = `Resultado - Peso Correto: ${pesoCorreto}gr`;
  mensagem += `\n----------------------------------------------`;
  mensagem += `\nVencedor: ${vencedorNome}`;
  mensagem += `\nAposta: ${vencedorPeso}gr`;
  alert(mensagem);
}

const btVencedor = document.getElementById("btVencedor");
btVencedor.addEventListener("click", verificarVencedor);

function limparApostas() {
  // solicita confirmação para excluir as apostas
  if (confirm("Confirma exclusão de todas as apostas?")) {
    localStorage.removeItem("melanciaNome"); // remove as variáveis salvas
    localStorage.removeItem("melanciaPeso"); // em localStorage
    mostrarApostas(); // exibe a listagem vazia
  }
}

const btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparApostas);