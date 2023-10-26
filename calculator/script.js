let displayValue = '';

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function appendOperator(operator) {
  displayValue += ` ${operator} `;
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue.replace(/ /g, ''));
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
    setTimeout(clearDisplay, 2000);
  }
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}
