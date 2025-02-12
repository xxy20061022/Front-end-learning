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


const questions = [
  { question: 'What is 1 + 1?', correctAnswer: '2' },
  { question: 'What is 2 + 2?', correctAnswer: '4' },
  { question: 'What is 3 + 3?', correctAnswer: '6' },
  { question: 'What is 4 + 4?', correctAnswer: '8' },
  { question: 'What is 5 + 5?', correctAnswer: '10' },
  { question: 'What is 6 + 6?', correctAnswer: '12' },
  { question: 'What is 7 + 7?', correctAnswer: '14' },
  { question: 'What is 8 + 8?', correctAnswer: '16' },
  { question: 'What is 9 + 9?', correctAnswer: '18' },
  { question: 'What is 10 + 10?', correctAnswer: '20' }
];





let score = 0;
let attempts = 0;

const messages = {
  good: ['Very good!', 'Excellent!', 'Nice work!', 'Keep up the good work!'],
  wrong: ['No. Please try again.', 'Wrong. Try once more.', 'No. Don’t give up!', 'Not correct. Keep trying.']
};


function askQuestion(index: number) {
  rl.question(`${questions[index].question} `, (answer) => {
    if (answer === questions[index].correctAnswer) {
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


    if (index + 1 < questions.length) {
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
