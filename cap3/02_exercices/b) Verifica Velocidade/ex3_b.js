function checkedSpeed() {
  const inSpeed = document.getElementById("inSpeed");
  const inSpeedDriver = document.getElementById("inSpeedDriver");
  const outSituacion = document.getElementById("outSituacion");

  let speed = Number(inSpeed.value);
  let speedDriver = Number(inSpeedDriver.value);

  if (speed == 0 || isNaN(speed)) {
    alert('Informe a velocidade permitida corretamente');
    inSpeed.value = '';
    inSpeed.focus();
    return;
  }

  if (speedDriver == 0 || isNaN(speedDriver)) {
    alert('Informe a velocidade do condutor corretamente');
    inSpeedDriver.value = '';
    inSpeedDriver.focus();
    return;
  }

  let speedCalc = speed + (speed * 0.2);
  let result;

  if (speedDriver <= speed) {
    result = 'Sem Multa';
  } else if (speedDriver <= speedCalc) {
    result = 'Multa Leve';
  } else {
    result = 'Multa Grave';
  }

  outSituacion.textContent = `Situação: ${result}`;
}

const btnToChecked = document.getElementById("btnToChecked");
btnToChecked.addEventListener('click', checkedSpeed);
