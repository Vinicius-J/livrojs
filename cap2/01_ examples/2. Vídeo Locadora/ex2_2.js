function converterDuracao() {
  // cria referência aos elementos da página
  const inTitulo = document.getElementById("inTitulo");
  const inDuracao = document.getElementById("inDuracao");
  const outTitulo = document.getElementById("outTitulo");
  const outResposta = document.getElementById("outResposta");

  // obtém conteúdos dos campos de entrada
  const titulo = inTitulo.value;
  const duracao = Number(inDuracao.value);

  // arredonda para baixo o resultado da divisão
  const horas = Math.floor(duracao / 60);

  // obtém o resto da divisão entre os números
  const minutos = duracao % 60;

  // altera o conteúdo dos parágrafos de resposta
  outTitulo.textContent = `${horas} horas e ${minutos} minutos`;
};

// cria uma referência ao elemento btConverter (botão)
const btConverter = document.getElementById("btConverter");

// registra um evento associado ao botão, para carregar uma função
btConverter.addEventListener("click", converterDuracao);
