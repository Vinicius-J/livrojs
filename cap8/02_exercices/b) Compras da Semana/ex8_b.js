const inProduto = document.getElementById("inProduto");

inProduto.addEventListener("keypress", (letra) => {
  if (letra.keyCode == 13) {
    addList();
  }
});

function addList() {

  let produto = inProduto.value;

  if (produto == "") {
    alert("Informe o produto corretamente");
    inProduto.focus();
    return;
  }

  if (localStorage.getItem("produtoStorage")) {
    let produtoStorage = localStorage.getItem("produtoStorage", produto) + ";" + produto;

    localStorage.setItem("produtoStorage", produtoStorage);
  } else {
    localStorage.setItem("produtoStorage", produto);
  }

  inProduto.value = '';
  inProduto.focus();

  addToList();
}

const btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", addList);

function addToList() {
  const outList = document.getElementById("outList");

  if (!localStorage.getItem("produtoStorage")) {
    outList.textContent = "";
    return;
  }

  let produto = localStorage.getItem("produtoStorage").split(";");
  produto.sort();

  let lista = `Produtos Adicionados\n-----------------------------\n`;

  for (i = 0; i < produto.length; i++) {
    lista += produto[i] + "\n";
  }

  outList.textContent = lista;
}

addToList();


function clearList() {
  if (confirm("Confirma exclusão da lista?")) {
    localStorage.removeItem("produtoStorage");
    addToList();
  }
}

const btnClear = document.getElementById("btnClear");
btnClear.addEventListener("click", clearList);