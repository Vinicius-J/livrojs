function toCheckedNumber() {
  const inNumber = document.getElementById("inNumber");
  const outResult = document.getElementById("outResult");

  let number = Number(inNumber.value);
  let toChecked;

  if(isNaN(number)){
    alert('Informe um número corretamente');
    inNumber.value = '';
    inNumber.focus();
    return;
  }

  if (number % 2 == 0) {
    toChecked = 'Par';
  } else{
    toChecked = 'Ímpar';
  }

  outResult.textContent = `Resposta: ${number} é ${toChecked}`;
};

const btnToChecked = document.getElementById("btnToChecked");
btnToChecked.addEventListener('click', toCheckedNumber);
