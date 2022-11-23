function calculate() {
  switch (operator) {
    case '+':
      return Number(firstNumber) + Number(primaryDisplay.innerHTML);
    case '-':
      return Number(firstNumber) - Number(primaryDisplay.innerHTML);
    case 'x':
      return Number(firstNumber) * Number(primaryDisplay.innerHTML);
    case '÷':
      return Number(firstNumber) / Number(primaryDisplay.innerHTML);
  }
}

buttons.addEventListener('click', event => {
  if (!event.target.classList.contains('button')) return;

  let primaryValue = primaryDisplay.innerHTML;
  let buttonValue = event.target.innerHTML;

  if (event.target.classList.contains('ac')) {
    operator = '';
    firstNumber = '';
    primaryDisplay.innerHTML = '0';
    secondaryDisplay.innerHTML = '';
  }

  if (event.target.classList.contains('number')) {
    if (primaryValue.length < 7)
      if (primaryValue !== '0') {
        primaryDisplay.innerHTML += buttonValue;
      } else if (buttonValue !== '0') {
        primaryDisplay.innerHTML = buttonValue;
      }
  }

  if (event.target.classList.contains('pm')) {
    if (primaryValue[0] == '-')
      primaryDisplay.innerHTML = primaryValue.substring(1);
    else if (primaryValue.length < 7 && primaryValue !== '0')
      primaryDisplay.innerHTML = '-' + primaryValue;
  }

  if (event.target.classList.contains('decimal')) {
    if (!primaryValue.includes('.')) {
      primaryDisplay.innerHTML += '.';
    }
  }

  if (event.target.classList.contains('operator')) {
    if (!isPrevOperator) {
      if (secondaryDisplay.innerHTML && operator) {
        firstNumber = calculate();
      } else firstNumber = primaryValue;

      primaryDisplay.innerHTML = '0';
    }

    operator = buttonValue;

    secondaryDisplay.innerHTML = firstNumber + ' ' + operator;

    isPrevOperator = true;
  } else isPrevOperator = false;
  if (event.target.classList.contains('equal')) {
    firstNumber = calculate();
    operator = '';
    secondaryDisplay.innerHTML = firstNumber;
    primaryDisplay.innerHTML = '0';
    isPrevOperator = true;
  }
});
