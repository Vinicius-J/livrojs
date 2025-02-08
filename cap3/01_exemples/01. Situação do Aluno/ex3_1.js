function criarMedia() {
  // cria referẽncia aos elementos da página
  const inNome = document.getElementById("inNome");
  const inNota1 = document.getElementById("inNota1");
  const inNota2 = document.getElementById("inNota2");
  const outMedia = document.getElementById("outMedia");
  const outSituacao = document.getElementById("outSituacao");

  // obtém os conteúdos dos campos de edição da página
  let nome = inNome.value;
  let nota1 = Number(inNota1.value);
  let nota2 = Number(inNota2.value);

  // calcula a média das notas
  let media = (nota1 + nota2) / 2;

  // apresenta a média (altera o conteúdo do elemento outMedia)
  outMedia.textContent = `Média das Notas ${media.toFixed(1)}`;

  // cria a condição
  if (media >= 7){
    // altera o texto e estilo da cor do elemento outSituacao
    outSituacao.textContent = `Parabéns ${nome}! Você foi aprovado(a)`;
    outSituacao.style.color = 'green';
  } else if (media >= 4){
    outSituacao.textContent = `Atenção ${nome}. Você está em exame`;
    outSituacao.style.color = 'yellow';
  } else {
    outSituacao.textContent = `Ops ${nome}... Você foi reprovado(a)`;
    outSituacao.style.color = 'red';
  }
}

// cria uma referência ao elemento btResultado (botão)
const btResultado = document.getElementById("btResultado");
btResultado.addEventListener('click', criarMedia);