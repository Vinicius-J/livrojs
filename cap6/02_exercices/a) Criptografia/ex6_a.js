// cria referência aos elementos e inicia a copia do inMsg
const inMsg = document.getElementById('inMsg');
const outMsg = document.getElementById('outMsg');
let copia;

function criptografarMsg() {
  // pega o conteúdo do inMsg
  let msg = inMsg.value;

  // verifica se há mensagem para criptografar
  if (msg == "") {
    alert("Informe uma mensagem para criptografar...");
    outMsg.textContent = "";
    inMsg.focus();
    return;
  }

  let cripMsg = ""; // concatena a mensagem
  let rest = ""; // pega o resto que sobre da mensagem
  let tam = msg.length; // pega o tamanho da mensagem

  // percorre a mensagem e separa as letras que estão no n° par e impar
  for (i = 0; i <= tam; i++) {
    copia = msg.replace(i);
    if ((i + 1) % 2 == 0) {
      cripMsg += msg.charAt(i);
    } else {
      rest += msg.charAt(i);
    }
  }

  // altera o texto do outMsg
  outMsg.textContent = cripMsg + rest;

  // deixa em branco e foca no inMsg
  inMsg.value = "";
  inMsg.focus();
}

// cria referência ao botão e associa a function ao click
const btnCriptografar = document.getElementById("btnCriptografar");
btnCriptografar.addEventListener('click', criptografarMsg);

// função que vai decriptografar a mensagem, usando a cópia feita antes
function decriptografarMsg() {
  outMsg.textContent = copia;

  // deixa em branco e foca no inMsg
  inMsg.value = "";
  inMsg.focus();
}

// cria referência ao botão e associa a function ao click
const btnDecriptografar = document.getElementById("btnDecriptografar");
btnDecriptografar.addEventListener('click', decriptografarMsg);