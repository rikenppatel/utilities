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
  displayValue = eval(displayValue.replace(/ /g, ''));
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}
