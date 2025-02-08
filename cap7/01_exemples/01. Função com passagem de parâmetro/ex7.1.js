// função recebe 2 parâmetros: nota e media
function exibirSituacao(nota, media) {
  if (nota >= media) { // compara o valor das variáveis
    alert("Aprovado");
  } else {
    alert("Reprovado");
  }
}
let prova1 = Number(prompt("Qual Nota: ")); // lê uma nota

// chama a função exibirSituacao() passando 2 argumentos
exibirSituacao(prova1, 7);