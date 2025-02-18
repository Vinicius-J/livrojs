let palavraSorteada; // declara variáveis globais
let dicaSorteada;

// cria referência aos elementos que irão conter eventos associados a functions
const inLetra = document.getElementById("inLetra");
const btJogar = document.getElementById("btJogar");
const btVerDica = document.getElementById("btVerDica");

function montarJogo() {
  // cria referência ao local onde a palavra sorteada (letra inicial e _) é exibida
  let outPalavra = document.getElementById("outPalavra");

  // obtém conteúdo do localStorage e separa em elementos de vetor
  let palavras = localStorage.getItem("jogoPalavra").split(";");
  let dicas = localStorage.getItem("jogoDica").split(";");

  let tam = palavras.length; // número de palavras cadastradas
  // gera um número entre 0 e tam-1 (pois arredonda para baixo)
  let numAleatorio = Math.floor(Math.random() * tam);

  // obtém palavra (em letras maiúsculas) e dica na posição do n° aleatório gerado
  palavraSorteada = palavras[numAleatorio].toUpperCase();
  dicaSorteada = dicas[numAleatorio];

  let novaPalavra = ""; // para montar palavra exibida (com letra inicial e "_")

  // for para exibira letra inicial e as demais ocorrências desta letra na palavra
  for (i = 0; i < palavraSorteada.length; i++) {
    // se igual a letra inicial, acrescenta esta letra na exibição
    if (palavraSorteada.charAt(0) == palavraSorteada.charAt(i)) {
      novaPalavra += palavraSorteada.charAt(0);
    } else { // senão ...
      novaPalavra += "_"; // acrescenta "_"
    }
  }
  outPalavra.textContent = novaPalavra; // exibe a novaPalavra
}
if (localStorage.getItem("jogoPalavra")) { // se houver palavras cadastradas
  montarJogo(); // sorteia e "monta" palavra do jogo
} else { // senão ...
  alert("Cadastre palavras para jogar"); // exibe alerta
  inLetra.disabled = true; // desabilita inLetra e botões
  btJogar.disabled = true; // (por isso, eles são referenciados no início do programa)
  btVerDica.disabled = true;
}

function mostrarDica() {
  // cria referência aos elementos da página a serem alterados nesta function
  const outErros = document.getElementById("outErros");
  const outDica = document.getElementById("outDica");
  const outChances = document.getElementById("outChances");

  let erros = outErros.textContent; // obtém o conteúdo do elemento outErros

  // verifica se o jogador já clicou anteriormente no botão
  if (erros.indexOf("*") >= 0) {
    alert("Você já solicitou a dica...");
    inLetra.focus();
    return;
  }

  outDica.textContent = " * " + dicaSorteada; // exibe dica
  outErros.textContent = erros + "*"; // acrescenta "*" nos erros
  let chances = Number(outChances.textContent) - 1; // diminui 1 em chances
  outChances.textContent = chances; // mostra o n° de chances

  trocarStatus(chances); // troca a imagem

  verificarFim(); // verifica se atingiu limite de chances

  inLetra.focus(); // joga o foco em inLetra (já referenciado no início do prog)
}
// associa ocorrência do evento click deste elemento à function mostrarDica()
btVerDica.addEventListener("click", mostrarDica);

function trocarStatus(num) {
  if (num > 0) {
    let imgStatus = document.getElementById("imgStatus");
    imgStatus.src = "status" + num + ".jpg";
  }
}

function jogarLetra() {
  const outPalavra = document.getElementById("outPalavra");
  const outErros = document.getElementById("outErros");
  const outChances = document.getElementById("outChances");

  // obtém o conteúdo do campo inLetra e convete-o para maiúscula
  let letra = inLetra.value.toUpperCase();

  // valida o preenchimento de uma uníca letra
  if (letra == "" || letra.length != 1) {
    alert("Informe uma letra");
    inLetra.focus();
    return;
  }

  let erros = outErros.textContent; // obtém o conteúdo dos elementos da página
  let palavra = outPalavra.textContent;

  // se a letra apostada já consta em erros, significa que ele já apostou esta letra
  if (erros.indexOf(letra) >= 0 || palavra.indexOf(letra) >= 0) {
    alert("Você já apostou esta letra");
    inLetra.value = "";
    inLetra.focus();
    return;
  }

  if (palavraSorteada.indexOf(letra) >= 0) { // se letra consta em palavraSorteada
    let novaPalavra = ""; // para compor novaPalavra
    // for para montar palavra a ser exibida
    for (i = 0; i < palavraSorteada.length; i++) {
      // se igual a letra apostada, acrescenta esta letra na exibição
      if (palavraSorteada.charAt(i) == letra) {
        novaPalavra += letra;
      } else { // senão
        novaPalavra += palavra.charAt(i); // acrescenta a letra ou "_" existente
      }
    }
    outPalavra.textContent = novaPalavra; // exibe a novaPalavra
  } else { // se a letra não consta em palavraSorteada
    erros += letra; // acrescenta letra em erros
    outErros.textContent = erros; // exibe os erros
    let chances = Number(outChances.textContent) - 1; // diminui n° de chances
    outChances.textContent = chances; // exibe novo n° de chances
    trocarStatus(chances); // troca imagem
  }
  verificarFim(); // verifica se já ganhou ou perdeu

  inLetra.value = "";
  inLetra.focus();
}
btJogar.addEventListener("click", jogarLetra);

// associa evento keypress à function anônima que verifica se pressionou enter (13)
inLetra.addEventListener("keypress", (tecla) => {
  if (tecla.keyCode == 13) {
    jogarLetra(); // ... e chama jogarLetra
  }
});

function verificarFim() {
  const outChances = document.getElementById("outChances");
  const outMensagemFinal = document.getElementById("outMensagemFinal");

  let chances = Number(outChances.textContent); // obtém número de chances

  if (chances == 0) { // se 0, perdeu
    // display-3 é um estilo do Bootstrap
    outMensagemFinal.className = "display-3 fonteVermelho";
    outMensagemFinal.textContent = `Ah... é ${palavraSorteada}. Você Perdeu!`;
    concluirJogo();
    // se não é 0 e a palavra exibida em outPalavra é igual a palavra sorteada, ganhou
  } else if (outPalavra.textContent == palavraSorteada) {
    outMensagemFinal.className = "display-3 fonteAzul";
    outMensagemFinal.textContent = `Parabéns!! Você Ganhou.`;
    concluirJogo();
  }
}

// function concluirJogo(), modifica o texto da dica e desabilita os botões de jogar
function concluirJogo() {
  const outDica = document.getElementById("outDica");
  outDica.textContent = "* Clique no botão 'Iniciar Jogo' para jogar novamente";
  let imgStatus = document.getElementById("imgStatus");
  imgStatus.src = "status4.jpg";
  inLetra.disabled = true;
  btJogar.disabled = true;
  btVerDica.disabled = true;
}