const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const totalQuestions = 10;
const passingGrade = 50;
const maxGrade = 100;

const scoreRange = {
  smart: 90,
  good: 80,
  ok: 70,
  pass: 60,
  tryAgain: 59
};

let score = 0;
let attempts = 0;

const messages = {
  good: ['Very good!', 'Excellent!', 'Nice work!', 'Keep up the good work!'],
  wrong: ['No. Please try again.', 'Wrong. Try once more.', 'No. Don\'t give up!', 'Not correct.']
};


function generateRandomQuestion() {
  let  num1 = Math.floor(Math.random() * 90) + 10; 
  let num2 = Math.floor(Math.random() * 90) + 10; 
  const operator = Math.random() > 0.5 ? '+' : '-'; 

  if (operator === '-') {
    
    if (num1 < num2) {
      [num1, num2] = [num2, num1]; 
    }
  }
  let question = `${num1} ${operator} ${num2}`;
  let correctAnswer;

  
  if (operator === '+') {
    correctAnswer = num1 + num2;
  } else {
    correctAnswer = num1 - num2;
  }

  return { question, correctAnswer };
}


function askQuestion(index: number) {
  const { question, correctAnswer } = generateRandomQuestion(); 
  rl.question(`Question ${index + 1}: ${question} = `, (answer) => {
    if (parseInt(answer) === correctAnswer) {
      score += 10;
      console.log(messages.good[Math.floor(Math.random() * messages.good.length)]);
      attempts = 0;
    } else {
      attempts++;
      if (attempts < 3) {
        console.log(messages.wrong[Math.floor(Math.random() * messages.wrong.length)]);
        askQuestion(index);  
      } else {
        console.log('Incorrect answer, moving to next question.');
        attempts = 0;
      }
    }

    if (index + 1 < totalQuestions) {
      askQuestion(index + 1); 
    } else {
      console.log('All questions completed!');
      gradeStudent();  
    }
  });
}


function gradeStudent() {
  let finalMessage = '';
  if (score >= scoreRange.smart) {
    finalMessage = 'SMART';
  } else if (score >= scoreRange.good) {
    finalMessage = 'GOOD';
  } else if (score >= scoreRange.ok) {
    finalMessage = 'OK';
  } else if (score >= scoreRange.pass) {
    finalMessage = 'PASS';
  } else {
    finalMessage = 'TRY AGAIN';
  }

  console.log(`Your score: ${score} - Result: ${finalMessage}`);
  rl.close();
}

askQuestion(0);  
