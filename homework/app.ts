let currentInput: string = '';
let previousInput: string = '';
let operator: string | null = null;

function appendNumber(num: number): void {
  currentInput += num.toString();

  if (operator) {
    updateDisplay(currentInput);
  } else {
    updateDisplay(`${previousInput} ${operator} ${currentInput}`);
  }
}



function setOperator(op: string): void {

  if (!currentInput && !previousInput) return;


  if (previousInput && currentInput) {
    calculateResult();
  }


  if (currentInput) {
    previousInput = currentInput;
    currentInput = '';
  }

  operator = op;


  updateDisplay(`${previousInput} ${operator}`);
}


function calculateResult(): void {
  if (!previousInput || !currentInput || !operator) return;

  const prev: number = parseFloat(previousInput);
  const curr: number = parseFloat(currentInput);
  let result: number = 0;

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


function clearDisplay(): void {
  currentInput = '';
  previousInput = '';
  operator = null;
  updateDisplay('0');
}


function resetCalculator(): void {
  clearDisplay();
}

function updateDisplay(value: string): void {
  const displayElement = document.getElementById('display') as HTMLElement;
  if (displayElement) {
    displayElement.textContent = value;
  }
}
