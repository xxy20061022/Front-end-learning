var currentInput = '';
var previousInput = '';
var operator = '';
var calculationHistory = '';
function appendNumber(number) {
    if (calculationHistory !== '' && previousInput === '') {
        currentInput = number;
        previousInput = '';
    }
    else {
        currentInput += number;
        updateDisplay(currentInput);
        updateHistory();
    }
}
function setOperator(op) {
    if (currentInput === '')
        return;
    if (previousInput !== '') {
        calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
    updateHistory();
}
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    calculationHistory = '';
    updateDisplay('0');
    updateHistory();
}
function calculateResult() {
    var result = 0;
    var prev = parseFloat(previousInput);
    var current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current))
        return;
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("不能除以0");
                return;
            }
            result = prev / current;
            break;
    }
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay(currentInput);
    updateHistory();
}
function updateDisplay(displayValue) {
    var display = document.getElementById("display");
    if (display) {
        display.textContent = displayValue;
    }
}
function updateHistory() {
    var history = document.getElementById("history");
    if (history) {
        history.textContent = "".concat(previousInput, " ").concat(operator, " ").concat(currentInput); // 更新计算过程显示
    }
}
