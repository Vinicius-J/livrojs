const rdYes = document.getElementById("rdYes");
const rdNot = document.getElementById("rdNot");
const inPlano = document.getElementById("inPlano");

rdYes.addEventListener('change', trocarItem);
rdNot.addEventListener('change', trocarItem);

function trocarItem() {
  if (rdYes.checked) {
    inPlano.className = "exibe";
  } else if (rdNot.checked) {
    inPlano.className = "oculta";
  }
}

const btnCalc = document.getElementById("btnCalc");
btnCalc.addEventListener('click', (e) => {
  e.preventDefault();
  const inOptions = document.getElementById("inOptions");
  const inValue = document.getElementById("inValue");
  const outDesc = document.getElementById("outDesc");
  const outValue = document.getElementById("outValue");

  let value = Number(inValue.value);
  let desconto = inOptions.selectedIndex;

  if (value == 0 || isNaN(value)) {
    alert("Informe o valor corretamente.");
    inValue.value = '';
    inValue.focus();
    return;
  }

  if (!rdYes.checked && !rdNot.checked) {
    alert("Informe se há ou não convênio");
    return;
  }

  let valueDesc = calcularDesconto(value, desconto);


  outDesc.textContent = `Desconto R$: ${valueDesc.toFixed(2)}`;
  outValue.textContent = `A Pagar R$: ${(value - valueDesc).toFixed(2)}`;

  inValue.value = '';
  rdNot.checked = false;
  rdYes.checked = false;
  inValue.focus();
});

function calcularDesconto(value, desconto) {
  let taxa = 0;
  if (rdYes.checked) {
    if (desconto == 0) {
      taxa = 0.2;
    } else if (desconto == 1) {
      taxa = 0.5;
    }
  }

  if (rdNot.checked) {
    taxa = 0.1;
  }
  return value * taxa;
}