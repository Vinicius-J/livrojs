alert('Digite 0 para sair');
// início da repetição]
do {
  const num = Number(prompt('Número: '));
  if (num == 0 || isNaN(num)) {
    // solicita confirmação do usuário
    let sair = confirm("Confirma saída?");
    if (sair) {
      // sai da repetição
      break;
    } else {
      // volta ao início do laço
      continue;
    }
  }
  // se par, mostra o dobro; ímpar, mostra o triplo
  if (num % 2 == 0) {
    alert(`O dobro de ${num} é: ${num * 2}`);
  } else {
    alert(`O triplo de ${num} é: ${num * 3}`);
  }
} while(true) // enquanto verdade (só sai do laço, pelo break)
alert("Bye, bye...");