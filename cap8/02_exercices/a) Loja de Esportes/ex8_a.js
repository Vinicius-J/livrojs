const contarVisit = () => {
  const outVisit = document.getElementById("outVisit");

  let contador = 0;

  if (localStorage.getItem("lojaContador")) {
    contador = Number(localStorage.getItem("lojaContador"))
  }

  contador++

  if (contador == 1) {
    outVisit.textContent = `Muito Bem-Vindo(a)! Está é sua primeira visita ao nosso site.`
  } else {
    outVisit.textContent = `Que bom que você voltou! Esta é sua visita de número ${contador} ao nosso site.`
  }

  localStorage.setItem("lojaContador", contador);
}

function trocarClube() {
  // cria referência aos elementos da página
  const imgClube = document.getElementById("imgClube");
  const divTitulo = document.getElementById("divTitulo");

  let clube; // define variável que irá receber o nome do clube

  // verifica qual radiobutton está selecionado
  if (rbBrasil.checked) {
    clube = "Brasil";
  } else if (rbPelotas.checked) {
    clube = "Pelotas";
  } else if (rbFarroupilha.checked) {
    clube = "Farroupilha";
  }

  // define as classes de divTitulo: row e cores do clube
  divTitulo.className = `row cores${clube}`;

  // modifica a imagem de acordo com a seleção do cliente
  imgClube.src = `${clube.toLowerCase()}.png`;
  imgClube.className = `exibe`; // exibe a imagem
  imgClube.alt = `Símbolo do ${clube}`; // modifica atributo alt

  // salva no navegador a escolha do cliente
  localStorage.setItem("clube", clube);
}

// captura os elementos do radiobutton
const rbBrasil = document.getElementById("rbBrasil");
const rbPelotas = document.getElementById("rbPelotas");
const rbFarroupilha = document.getElementById("rbFarroupilha");

// associa ao evento change a function trocarClube
rbBrasil.addEventListener('change', trocarClube);
rbPelotas.addEventListener('change', trocarClube);
rbFarroupilha.addEventListener('change', trocarClube);

function verificaClube() {
  // se já estier salvo algum clube
  if (localStorage.getItem("clube")) {
    let clube = localStorage.getItem("clube"); // obtém o nome do clube

    // conforme o clube, marca um dos elementos do input type radio
    if (clube == "Brasil") {
      rbBrasil.checked = true;
    } else if (clube == "Pelotas") {
      rbPelotas.checked = true;
    } else {
      rbFarroupilha.checked = true;
    }

    trocarClube(); // chama a function que troca a imagem e as cores
  }

  contarVisit();
}

// chama a function que verifica se cliente já selecionou clube anteriormente
verificaClube();