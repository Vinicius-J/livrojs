function adicionarFilme() {
  // cria referência aos campos de entrada
  const inTitulo = document.getElementById("inTitulo");
  const inGenero = document.getElementById("inGenero");

  let titulo = inTitulo.value; // obtém conteúdo dos campos
  let genero = inGenero.value;

  // valida preenchimento
  if (titulo == "" || genero == "") {
    alert("Informe corretamente os dados");
    inTitulo.focus();
    return;
  }

  // cria referência ao elemento tbFilmes
  const tbFilmes = document.getElementById("tbFilmes");

  // chama function que irá inserir filme na tabela
  inserirLinha(tbFilmes, titulo, genero);

  // chama function que irá gravar dados em localStorage
  gravarFilme(titulo, genero);

  inTitulo.value = ""; // limpa campos de entrada
  inGenero.value = "";
  inTitulo.focus(); // posiciona o cursor em inTitulo
}

const btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarFilme);

function inserirLinha(tabela, titulo, genero) {
  let linha = tabela.insertRow(-1); // adiciona uma linha na tabela

  let col1 = linha.insertCell(0); // cria colunas na linha inserida
  let col2 = linha.insertCell(1);
  let col3 = linha.insertCell(2);

  col1.textContent = titulo; // joga um conteúdo em cada célula
  col2.textContent = genero;
  col3.innerHTML = "<input type='checkbox'>"; // innerHTML renderiza código
}

function gravarFilme(titulo, genero) {
  // se há filmes salvos em localStorage
  if (localStorage.getItem("filmesTitulo")) {
    // ... obtém os dados e acrescenta ";" e o título/gênero informado
    let filmesTitulo = localStorage.getItem("filmesTitulo") + ";" + titulo;
    let filmesGenero = localStorage.getItem("filmesGenero") + ";" + genero;

    localStorage.setItem("filmesTitulo", filmesTitulo); // grava dados em localStorage
    localStorage.setItem("filmesGenero", filmesGenero);
  } else {
    // senão, é a primeira inclusão (salva sem delimitador)
    localStorage.setItem("filmesTitulo", titulo);
    localStorage.setItem("filmesGenero", genero);
  }
}

function recuperarFilmes() {
  // se houver dados salvos em localStorage
  if (localStorage.getItem("filmesTitulo")) {
    // obtém conteúdo e converte em elementos de vetor (na ocorrência ";")
    let titulos = localStorage.getItem("filmesTitulo").split(";");
    let generos = localStorage.getItem("filmesGenero").split(";");

    // cria referência ao elemento tbFilmes
    const tbFilmes = document.getElementById("tbFilmes");

    // percorre elementos do vetor e os insere na tabela
    for (i = 0; i < titulos.length; i++) {
      inserirLinha(tbFilmes, titulos[i], generos[i]);
    }
  }
}
recuperarFilmes();

// cria referência ao checkbox ckTodos (na linha da tabela)
const ckTodos = document.getElementById("ckTodos");
// executa função anônima quando houver uma troca de status
ckTodos.addEventListener("change", () => {
  // cria referência à tabela e aos campos input (filhos da tabela)
  const tbFilmes = document.getElementById("tbFilmes");
  let ckExcluir = tbFilmes.getElementsByTagName("input");

  let status = ckTodos.checked; // obtém status de ckTodos ...

  // ... e percorre os demais checkbox para aplicar status de ckTodos
  for (i = 1; i < ckExcluir.length; i++) {
    ckExcluir[i].checked = status;
  }
});

function removerFilme() {
  // cria referência à tabela e aos campos input (filhos da tabela)
  const tbFilmes = document.getElementById("tbFilmes");
  let ckExcluir = tbFilmes.getElementsByTagName("input");

  let temSelecionado = false; // para verificar se há filmes selecionados

  // percorre campos type checkbox da tabela (exceto "Todos" no título) 
  for (i = 1; i < ckExcluir.length; i++) {
    if (ckExcluir[i].checked) { // se está selecionado
      temSelecionado = true; // muda valor da flag;
      break;
    }
  }

  // se não temSelecionado (se valr da variável é false)
  if (!temSelecionado) {
    alert("Não há filmes selecionados para exclusão");
    return;
  }

  // solicita confirmação de exclusão dos filmes selecionados
  if (confirm("Confirma a Exclusão dos Filmes Selecionados?")) {
    // exclui conteúdo armazenado em localStorage
    localStorage.removeItem("filmesTitulo");
    localStorage.removeItem("filmesGenero");

    // primeiro irá gravar em localStorage os filmes não selecionados
    for (i = 1; i < ckExcluir.length; i++) {
      // se não está selecionado (para exclusão)
      if (!ckExcluir[i].checked) {
        // obtém o conteúdo da tabela (colia 0: título, coluna 1: gênero)
        let titulo = tbFilmes.rows[i].cells[0].textContent;
        let genero = tbFilmes.rows[i].cells[1].textContent;
        gravarFilme(titulo, genero); // chama gravarFilme com dados da tabela
      }
    }

    // agora irá remover as linhas selecionadas (do fim para o início)
    for (i = ckExcluir.length - 1; i > 0; i--) {
      if (ckExcluir[i].checked) {
        tbFilmes.deleteRow(i); // remove a linha
      }
    }
    ckExcluir[0].checked = false; // desmarca ckTodos (que é o input 0)
  }
}

const btExcluir = document.getElementById("btExcluir");
btExcluir.addEventListener("click", removerFilme);