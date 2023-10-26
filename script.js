let displayValue = '';

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function calculate() {
  displayValue = eval(displayValue);
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}
