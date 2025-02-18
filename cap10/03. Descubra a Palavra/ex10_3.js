function cadastrarPalavra() {
  // cria referência aos elementos de entrada de dados
  const inPalavra = document.getElementById("inPalavra");
  const inDica = document.getElementById("inDica");

  let palavra = inPalavra.value;
  let dica = inDica.value;

  // valida preenchimento (palavra não deve possuir espaço em branco)
  if (palavra == "" || dica == "" || palavra.indexOf(" ") >= 0) {
    alert("Informe uma palavra válida (sem espaços) e sua dica correspondente");
    inPalavra.focus();
    return;
  }

  // se já existe...
  if (localStorage.getItem("jogoPalavra")) {
    // grava conteúdo anterior + ";" e a palavra / dica
    localStorage.setItem("jogoPalavra", localStorage.getItem("jogoPalavra") + ";" + palavra);
    localStorage.setItem("jogoDica", localStorage.getItem("jogoDica") + ";" + dica);
  } else {
    // senão, é a primeira inclusão: grava apenas a palavra e dica
    localStorage.setItem("jogoPalavra", palavra);
    localStorage.setItem("jogoDica", dica);
  }

  // verifica se salvou
  if (localStorage.getItem("jogoPalavra")) {
    alert(`Ok! Palavra "${palavra}" Cadastrada com Sucesso`);
  }

  inPalavra.value = ""; // limpa campos de edição
  inDica.value = "";
  inPalavra.focus(); // joga foco em inPalavra
}

// cria referência ao elemento btCadastrar e associa function ao evento click
const btCadastrar = document.getElementById("btCadastrar");
btCadastrar.addEventListener("click", cadastrarPalavra);