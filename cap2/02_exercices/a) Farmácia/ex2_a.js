function promocaoMedicamento() {
  // faz referência aos elementos da página (input e output)
  const inMedicamento = document.getElementById("inMedicamento");
  const inPreco = document.getElementById("inPreco");
  const outMedicamento = document.getElementById("outMedicamento");
  const outPrecoPromo = document.getElementById("outPrecoPromo");

  // pega os valores dos inputs
  const medicamento = inMedicamento.value;
  const preco = Number(inPreco.value);

  // faz o cálculo
  const valorDuas = preco * 2;
  const desconto = valorDuas - Math.floor(valorDuas);
  const valorPromo = valorDuas - desconto;

  // coloca na tela o resultado
  outMedicamento.textContent = `Promoção de ${medicamento}`;
  outPrecoPromo.textContent = `Leve duas por apenas R$: ${valorPromo.toFixed(2)}`;
};

// seleciona o botão e exuta a função com clique
const btMostrarPromo = document.getElementById("btMostrarPromo");
btMostrarPromo.addEventListener('click', promocaoMedicamento);
