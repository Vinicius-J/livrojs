var itens = []; // vetor global para armazenar os itens do pedido

function trocarItem() {
  // cria referênci aos elementos select
  const inPizza = document.getElementById("inPizza");
  const inBebida = document.getElementById("inBebida");

  // se estiver marcado
  if (rbPizza.checked) {
    inBebida.className = "oculta"; // oculta select das bebidas
    inPizza.className = "exibe"; // exibe select das pizzas
  } else {
    inPizza.className = "oculta"; // oculta select das pizzas
    inBebida.className = "exibe"; // exibe select das bebidas
  }
}

// cria referência aos radiosbutton's e associa função ao evento change
const rbPizza = document.getElementById("rbPizza");
rbPizza.addEventListener('change', trocarItem);

const rbBebida = document.getElementById("rbBebida");
rbBebida.addEventListener('change', trocarItem);

function mostrarNumSabores() {
  // se radiobutton rbPizza estiver marcado
  if (rbPizza.checked) {
    let pizza = inPizza.value; // obtém value do item selecionado
    // uso o operador condicional (cap. 3), para indicar o número de sabores
    let num = (pizza == "media") ? 2 : (pizza == "grande") ? 3 : 4;
    // atributo placeholder exibe uma dica de preenchimento do campo
    inDetalhe.placeholder = `Até ${num} sabores`;
  }
}

// cria referência ao elemento e associa função ao evento focus
const inDetalhe = document.getElementById("inDetalhe");
inDetalhe.addEventListener('focus', mostrarNumSabores);

// cria função (anônima) ao evento blur (quando o campo perde o foco)
inDetalhe.addEventListener('blur', function () {
  inDetalhe.placeholder = ""; // lipa a dica de preenchimento
});

// cria função (anônima) associada ao evento keypress (tecla pressionada)
inDetalhe.addEventListener('keypress', function (tecla) {
  // se pressionou tecla de código 13 (enter)
  if (tecla.keyCode == 13) {
    adicionarItem(); // irá adicionar item no pedido
  }
});

function adicionarItem() {
  // cria referência aos elementos da página (ainda não referenciados)
  const inPizza = document.getElementById("inPizza");
  const inBebida = document.getElementById("inBebida");
  const outPedido = document.getElementById("outPedido");

  // se radiobutton Pizza estiver marcado
  if (rbPizza.checked) {
    let num = inPizza.selectedIndex; // obtém n° do item selecionado
    var produto = inPizza.options[num].text; // texto do item selecionado
  } else {
    let num = inBebida.selectedIndex;
    var produto = inBebida.options[num].text;
  }

  let detalhes = inDetalhe.value; // conteúdo do inDetalhe
  itens.push(produto + " (" + detalhes + ") "); // adiciona ao vetor
  outPedido.textContent = itens.join("\n"); // exibe em outPedidos
  limparCampos(); // limpa conteúdo dos campos
}

// cria referência ao elemento e associa a função aoe evento click
const btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener('click', adicionarItem);

function limparCampos(){
  rbPizza.checked = true; // marca (seleciona) rbPizza
  inBebida.className = "oculta"; // oculta select das Bebidas
  inPizza.className = "exibe"; // exibe selected das Pizzas
  inPizza.selectedIndex = 0; // seleciona o 1° item (posição 0)
  inDetalhe.value = ""; // limpa input Detalhes
  rbPizza.focus(); // "joga foco" no rbPizza
}