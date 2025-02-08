const inName = document.getElementById("inName");

function createPassword() {
  const outPassword = document.getElementById("outPassword");

  let name = inName.value;

  let lastName = obterSobrenome(name);
  let numVogais = contarVogais(name);

  if (!validarNome(name)) {
    alert("Informe o nome completo.")
    inName.value = '';
    inName.focus();
    return;
  }

  let result = "";

  outPassword.textContent = `Senha Inicial: ${lastName}${numVogais}`;

  inName.value = '';
  inName.focus();
}

const btnCreate = document.getElementById("btnCreate");
btnCreate.addEventListener('click', createPassword);

inName.addEventListener('keypress', (tecla) => {
  if (tecla.keyCode == 13) {
    createPassword();
  }
});

function validarNome(name) {
  return name.includes(" ");
}

function obterSobrenome(name) {
  let lastSpace = name.lastIndexOf(" ");
  let lastName = name.slice(lastSpace).toLowerCase();

  return lastName
}

function contarVogais(name) {
  let vogais = name.match(/[aeiouà-ú]/gi);
  let tam = vogais.length;
  let contador = 0;
  for (i = 0; i < tam; i++) {
    contador++;
  }

  return contador < 10 ? "0" + contador : contador;
}