function calcTime() {
  const inValue = document.getElementById("inValue");
  const outTime = document.getElementById("outTime");
  const outMoney = document.getElementById("outMoney");

  let value = Number(inValue.value);

  if (value < 1 || isNaN(value)) {
    alert('Valor Insuficiente');
    inValue.textContent = '';
    inValue.focus();
    return;
  }

  let value120 = Math.floor(value / 3);
  let value60 = Math.floor(value / 1.75);
  let value30 = Math.floor(value / 1);

  let time;
  let money;

  if (value120 >= 1) {
    time = 120;
    money = value - 3;
  } else if (value60 == 1) {
    time = 60;
    money = value - 1.75;
  } else if (value30 == 1) {
    time = 30;
    money = value - 1;
  }

  outTime.textContent = `Tempo: ${time} min`;
  outMoney.textContent = `Troco R$: ${money.toFixed(2)}`;
}

const btnConfirme = document.getElementById("btnConfirme");
btnConfirme.addEventListener('click', calcTime);