// declarar a função mostrarOla
function mostrarOla() {

// obtem o centeúdo do campo (com id=) mome
  const nome = document.getElementById("nome").value
// exibe no parágrafo (resposta): "Olá " e o nome informado

  document.getElementById("resposta").textContent = `Olá ${nome}`;
}

// cria uma referência ao botão (com id=) mostrar
const mostrar = document.getElementById("mostrar");

//registra para o botão "mostrar" um ouvinte para o evento click que ao ser clicado irá chamar a função mostrarOla
mostrar.addEventListener('click', mostrarOla);