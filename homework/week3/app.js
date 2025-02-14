var currentInput = '';
var previousInput = '';
var operator = null;
function appendNumber(num) {
    currentInput += num.toString();
    if (operator === null) {
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
    addHistory("".concat(previousInput, " ").concat(operator));
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
    addHistory("".concat(previousInput, " ").concat(operator || '', " ").concat(currentInput, " = ").concat(result));
}
function addHistory(record) {
    var historyElement = document.getElementById('history');
    var historyItem = document.createElement('div');
    historyItem.textContent = record;
    historyElement.insertBefore(historyItem, historyElement.firstChild);
}
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateDisplay('0');
}
function updateDisplay(value) {
    var displayElement = document.getElementById('display');
    if (displayElement) {
        displayElement.textContent = value;
    }
}
