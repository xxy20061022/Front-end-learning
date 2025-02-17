let currentInput = '';  
let previousInput = ''; 
let operator = '';      
let calculationHistory = ''; 


function appendNumber(number: string): void {
  if (calculationHistory !== '' && previousInput ! === '') {
    currentInput = number;  
    previousInput = '';  
  } else {
    currentInput += number;  
  updateDisplay(currentInput);  
  updateHistory();  
}}


function setOperator(op: string): void {
  if (currentInput === '') return;  
  if (previousInput !== '') {
    calculateResult();  
  }
  operator = op;  
  previousInput = currentInput;  
  currentInput = '';  
  updateHistory();  
}


function clearDisplay(): void {
  currentInput = '';  
  previousInput = ''; 
  operator = '';     
  calculationHistory = ''; 
  updateDisplay('0');  
  updateHistory();  
}

function calculateResult(): void {
  let result: number = 0;  
  const prev = parseFloat(previousInput);  
  const current = parseFloat(currentInput);  

  if (isNaN(prev) || isNaN(current)) return;  

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


function updateDisplay(displayValue: string): void {
  const display = document.getElementById("display");
  if (display) {
    display.textContent = displayValue;  
  }
}


function updateHistory(): void {
  const history = document.getElementById("history");
  if (history) {
    history.textContent = `${previousInput} ${operator} ${currentInput}`; // 更新计算过程显示
  }
}
