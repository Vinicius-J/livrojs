function verSenha() {
  // cria referência aos elementos da página
  const inSenha = document.getElementById("inSenha");
  const outResposta = document.getElementById("outResposta");

  // obtém o conteúdo do campo de entrada
  let senha = inSenha.value;

  let erros = []; // vetor com erros

  // verifica se o tamanho da senha é inválido
  if (senha.lenght < 8 || senha.lenght > 15) {
    erros.push("possuir entre 8 e 15 caracteres");
  }

  // verifica se não possui números
  if (senha.match(/[0-9]/g) == null) {
    erros.push("possuir números (no mínimo, 1");
  }

  // verifica se não possui letras minúsculas
  if (!senha.match(/[a-z]/g) == null) {
    erros.push("possuir letras mínusculas (no mínimo, 1)");
  }

  // verifica se não possui letras maiúsculas ou se possui apenas 1
  if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g) == 1) {
    erros.push("possuir letras maiúsculas (no mínimo, 2)");
  }

  // verifica se não possui símbolos ou "_"
  if (!senha.match(/[\W|_]/g)) {
    erros.push("possuir símbolos (no minímo, 1)");
  }

  // se vetor está vazio (significa que não foram encontrados erros)
  if (erros.length == 0) {
    outResposta.textContent = "Ok, senha Válida";
  } else {
    outResposta.textContent = `Erro... A senha deve ${erros.join(', ')}`;
  }
}

// cria referência aobotão e após associa function ao evento click
const btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener('click', verSenha);