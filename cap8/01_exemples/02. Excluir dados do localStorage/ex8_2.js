// captura as tags input da página
const inputsRadio = document.getElementsByTagName("input");

// percorre os elementos para associar function ao evento change
for (i = 0; i < inputsRadio.length; i++) {
  inputsRadio[i].addEventListener('change', trocarClube);
}

function trocarClube() {
  // cria referência aos elementos da página
  const imgClube = document.getElementById("imgClube");
  const divTitulo = document.getElementById("divTitulo");

  // armazena em um vetor a lista de clubes
  let clubes = ["Brasil", "Pelotas", "Farroupilha"];

  // percorre os radiobuttons para verificar qual está selecionado
  for (i = 0; i < 4; i++) {
    if (inputsRadio[i].checked) { // se selecionado
      var selecao = i; // armazena o índice do radio selecionado
      break; // e sai da repetição
    }
  }

  if (selecao <= 2) { // se seleção <= 2, então torce por algum clube
    divTitulo.className = `row cores${clubes[selecao]}`; // modifica cores (divTitulo)
    // muda a proprieda src com a imagem do clube selecionado
    imgClube.src = `${clubes[selecao].toLowerCase()}.png`;
    imgClube.className = `exibe`; // exibe imagem
    imgClube.alt = `Símbolo do ${clubes[selecao]}`; // texto alternativo
    localStorage.setItem("clube", clubes[selecao]); // salva nome do clube
  } else { // else (selecionou "Nenhum")
    divTitulo.className = `row`; // tira a classe de cores da divTitulo
    imgClube.className = `oculta`; // oculta imagem
    imgClube.alt = ``; // limpa texto alternativo
    localStorage.removeItem("clube"); // remove variável do localStorage
  }
}

function verificarClube() {
  // se já estiver salvo algum clube
  if (localStorage.getItem("clube")) {
    let clube = localStorage.getItem("clube"); // obtém o nome do clube

    // conform o clube, marca um dos elementos do input type radio
    if (clube == "Brasil") {
      inputsRadio[0].checked = true;
    } else if (clube == "Pelotas") {
      inputsRadio[1].checked = true;
    } else {
      inputsRadio[2].checked = true;
    }
    trocarClube(); // chama a function que troca a imagem e cores
  }
}

// chama function que verifica se cliente já selecionou clube anteriormente
verificarClube();