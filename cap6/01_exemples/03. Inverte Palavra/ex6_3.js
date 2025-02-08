let palavra = prompt("Palavra: "); // lê a palavra
let tam = palavra.length; // obtém o tamanho da palavra

// inverso inicia com a última letra da palavra em caixa alta
let inverso = palavra.charAt(tam - 1).toUpperCase();
// for descrescente percorre as demais letras e...
for (i = tam - 2; i >= 0; i--) {
  inverso += palavra.charAt(i).toLocaleLowerCase(); // ...converte-as em caixa baixa
}

// exibe palavra original e invertida
alert(`Palavra: ${palavra}\nInvertida: ${inverso}`);