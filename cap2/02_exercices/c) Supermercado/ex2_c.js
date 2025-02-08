function calculaPromocao() {
  const inputProduto = document.getElementById("inputProduto");
  const inputPreco = document.getElementById("inputPreco");
  const outputPromocaoProduto = document.getElementById("outputPromocaoProduto");
  const outputValor3Produto = document.getElementById("outputValor3Produto");

  const produto = inputProduto.value;
  const preco = Number(inputPreco.value);
  const preco3Produto = preco / 2;

  const valor = (preco * 2) + preco3Produto;

  outputPromocaoProduto.textContent = `${produto} - Promoção: Leve 3 por R$: ${valor.toFixed(2)}`;
  outputValor3Produto.textContent = `O 3° produto custa apenas R$: ${preco3Produto.toFixed(2)}`;
};
const btnVerPromocao = document.getElementById("btnVerPromocao");
btnVerPromocao.addEventListener('click', calculaPromocao);