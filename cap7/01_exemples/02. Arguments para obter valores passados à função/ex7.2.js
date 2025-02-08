function calcularMedia() {
  if (arguments.length == 0) { // se não foram passados argumentos
    alert("Informe, no minímo, uma nota");
    return;
  }

  let soma = 0; // vai acumular a soma das notas
  let numNotas = arguments.length; // obtém a quantidade de argumentos

  for (i = 0; i < numNotas; i++) { // percorre os argumentos
    soma += arguments[i]; // soma o valor dos argumentos
  }

  let media = soma / numNotas; // calcula a média
  alert(`Media das Notas: ${media.toFixed(2)}`);
}

// exemplos de chamada de calcularMedia() com n° de argumentos diferentes
calcularMedia(5, 6, 8);
calcularMedia(2, 10);
calcularMedia(7.5, 10, 8, 9.5);
calcularMedia();