function multaTransito() {
  // referência aos elementos usados na function
  const inDate = document.getElementById("inDate");
  const inValue = document.getElementById("inValue");
  const outDateLimit = document.getElementById("outDateLimit");
  const outValue = document.getElementById("outValue");

  // pega o valor de inDate e inValue
  let date = inDate.value;
  let value = Number(inValue.value);

  // "seta" data
  let venc = new Date();

  // separa date em partes para alterar o valor de venc -> aaaa-mm-dd
  let partes = date.split("-");
  venc.setDate(Number(partes[2]));
  venc.setMonth(Number(partes[1]) - 1); // mes vai de 0 a 11, aqui está de 1 a 12
  venc.setFullYear(Number(partes[0]));

  // seleciona o dia, mes e ano
  let dia = venc.getDate();
  venc.setDate(Number(dia + 90)); // soma mais 90 do prazo de pagamento ao dia
  const mes = venc.getMonth() + 1; // soma mais 1 para dar o mês correto
  const ano = venc.getFullYear();
  let result; // vai concatenar o resultado
  let valorDesc = value * 0.80; // faz o calculo de desconto

  // altera o valor de result e verifica se precisa de 0 a esquerda no dia e mes
  result = `Data Limite para Pagamento com Desconto: ${dia < 10 ? "0" + dia : dia}/${mes < 10 ? "0" + mes : mes}/${ano}`;

  // altera o valor de outDateLimit e outValue
  outDateLimit.textContent = result;
  outValue.textContent = `Valor do Desconto R$: ${valorDesc.toFixed(2)}`;

  // zera o value do inDate e inValue
  inDate.value = '';
  inValue.value = '';
}

// cria referência ao botão e associa evento click a function
const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener('click', multaTransito); 