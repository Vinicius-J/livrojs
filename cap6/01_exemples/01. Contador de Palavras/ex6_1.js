let anuncio = prompt('Anúncio: '); // lê o anúncio
let tam = anuncio.length; // obtém o tamanho
let numPalavras = 0; // inicializa contador
for (i = 0; i < tam; i++) { // percorre os caracteres do anúncio
  if (anuncio.charAt(i) == ' ') { // se encontrou um espaço
    numPalavras++; // incrementa contador
  }
}

// exibe anúncio e número de palavras (que é o n° de espaços + 1)
alert(`Anúncio: ${anuncio}\nN° Palavras: ${numPalavras + 1}`);