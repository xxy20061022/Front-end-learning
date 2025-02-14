var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var totalQuestions = 10;
var passingGrade = 50;
var maxGrade = 100;
var scoreRange = {
    smart: 90,
    good: 80,
    ok: 70,
    pass: 60,
    tryAgain: 59
};
var score = 0;
var attempts = 0;
var messages = {
    good: ['Very good!', 'Excellent!', 'Nice work!', 'Keep up the good work!'],
    wrong: ['No. Please try again.', 'Wrong. Try once more.', 'No. Don\'t give up!', 'Not correct.']
};
function generateRandomQuestion() {
    var _a;
    var num1 = Math.floor(Math.random() * 90) + 10;
    var num2 = Math.floor(Math.random() * 90) + 10;
    var operator = Math.random() > 0.5 ? '+' : '-';
    if (operator === '-') {
        if (num1 < num2) {
            _a = [num2, num1], num1 = _a[0], num2 = _a[1];
        }
    }
    var question = "".concat(num1, " ").concat(operator, " ").concat(num2);
    var correctAnswer;
    if (operator === '+') {
        correctAnswer = num1 + num2;
    }
    else {
        correctAnswer = num1 - num2;
    }
    return { question: question, correctAnswer: correctAnswer };
}
function askQuestion(index) {
    var _a = generateRandomQuestion(), question = _a.question, correctAnswer = _a.correctAnswer;
    rl.question("Question ".concat(index + 1, ": ").concat(question, " = "), function (answer) {
        if (parseInt(answer) === correctAnswer) {
            score += 10;
            console.log(messages.good[Math.floor(Math.random() * messages.good.length)]);
            attempts = 0;
        }
        else {
            attempts++;
            if (attempts < 3) {
                console.log(messages.wrong[Math.floor(Math.random() * messages.wrong.length)]);
                askQuestion(index);
            }
            else {
                console.log('Incorrect answer, moving to next question.');
                attempts = 0;
            }
        }
        if (index + 1 < totalQuestions) {
            askQuestion(index + 1);
        }
        else {
            console.log('All questions completed!');
            gradeStudent();
        }
    });
}
function gradeStudent() {
    var finalMessage = '';
    if (score >= scoreRange.smart) {
        finalMessage = 'SMART';
    }
    else if (score >= scoreRange.good) {
        finalMessage = 'GOOD';
    }
    else if (score >= scoreRange.ok) {
        finalMessage = 'OK';
    }
    else if (score >= scoreRange.pass) {
        finalMessage = 'PASS';
    }
    else {
        finalMessage = 'TRY AGAIN';
    }
    console.log("Your score: ".concat(score, " - Result: ").concat(finalMessage));
    rl.close();
}
askQuestion(0);
