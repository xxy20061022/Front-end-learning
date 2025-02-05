
var currentInput = '';
var previousInput = '';
var operator = null;

function appendNumber(num) {
    currentInput += num.toString();
    updateDisplay(currentInput);
}

function setOperator(op) {
    if (!currentInput)
        return;
    if (previousInput) {
        calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    if (!previousInput || !currentInput || !operator)
        return;
    var prev = parseFloat(previousInput);
    var curr = parseFloat(currentInput);
    var result = 0;
    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
    }
    currentInput = result.toString();
    operator = null;
    previousInput = '';
    updateDisplay(currentInput);
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateDisplay('0');
}

function resetCalculator() {
    clearDisplay();
}

function updateDisplay(value) {
    var displayElement = document.getElementById('display');
    if (displayElement) {
        displayElement.textContent = value;
    }
}
