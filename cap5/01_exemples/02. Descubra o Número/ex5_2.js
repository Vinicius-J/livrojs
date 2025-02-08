// declara vetor de escopo global que irá conter os números já apostados
let erros = [];

// gera um número aleatório entre 1 e 100
let sorteado = Math.floor(Math.random() * 100) + 1;

// declara constante com o número de chances
const CHANCES = 6;

function apostarNumero() {
  // cria referência ao campo de entrada e obtém seu conteúdo
  const inNumero = document.getElementById("inNumero");
  let numero = Number(inNumero.value);

  // valida o número
  if (numero <= 0 || numero > 100 || isNaN(numero)) {
    alert('Informe um número válido...');
    inNumero.value = '';
    inNumero.focus();
    return;
  }

  // referencia espaços das saídas de dados
  const outDica = document.getElementById("outDica");
  const outErros = document.getElementById("outErros");
  const outChances = document.getElementById("outChances");

  // se aposta do jogador for igual ao número sorteado
  if (numero == sorteado) {
    alert('Parábens!! Você Acertou!!!');
    // troca status dos botões
    btApostar.disabled = true;
    btJogar.className = 'exibe';
    outDica.textContent = `Parabéns!! Número sorteado: ${sorteado}`;
  } else {
    // se número existe no vetor erros
    if (erros.indexOf(numero) >= 0) {
      alert(`Você já apostou o número ${numero}. Tente outro...`);
    } else {
      erros.push(numero); // adiciona número ao vetor
      let numErros = erros.length; // obtém tamanho do vetor
      let numChances = CHANCES - numErros; // calcula n° de chances
      // exibe n° de erros, conteúdo do vetor e n° de chances
      outErros.textContent = `${numErros} (${erros.join(', ')})`;
      outChances.textContent = numChances;
      if (numChances == 0) {
        alert('Suas chances acabaram...');
        btApostar.disabled = true;
        btJogar.className = 'exibe';
        outDica.textContent = `Game Over!! Número Sorteado: ${sorteado}`;
      } else {
        // usa operador ternário (condicional) para mensagem da dica
        let dica = numero < sorteado ? 'maior' : 'menor';
        outDica.textContent = `Dica: Tente um número ${dica} que ${numero}`;
      }
    }
  }

  // Limpa campo de entrada e posiciona cursor neste campo
  inNumero.value = '';
  inNumero.focus();
}

const btApostar = document.getElementById("btApostar");
btApostar.addEventListener('click', apostarNumero);

function jogarNovamente() {
  location.reload(); // recarrega a página
}

const btJogar = document.getElementById("btJogar");
btJogar.addEventListener('click', jogarNovamente);