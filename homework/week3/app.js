var currentInput = '';
var previousInput = '';
var operator = null;
function appendNumber(num) {
    currentInput += num.toString();
    if (operator) {
        updateDisplay(currentInput);
    }
    else {
        updateDisplay("".concat(previousInput, " ").concat(operator, " ").concat(currentInput));
    }
}
function setOperator(op) {
    if (!currentInput && !previousInput)
        return;
    if (previousInput && currentInput) {
        calculateResult();
    }
    if (currentInput) {
        previousInput = currentInput;
        currentInput = '';
    }
    operator = op;
    updateDisplay("".concat(previousInput, " ").concat(operator));
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
