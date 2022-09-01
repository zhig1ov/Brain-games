import { incorrectResponse, getAnswer } from './utils/utils.js';
import sayHi from './cli.js';

const operators = ['+', '-', '*'];
const expressions = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const brainCalc = () => {
  const userName = sayHi();

  console.log('What is the result of the expression?');

  for (let i = 1; i <= 3; i += 1) {
    const randNum1 = Math.floor(Math.random() * 99) + 1;
    const randNum2 = Math.floor(Math.random() * 99) + 1;
    const operator = operators[Math.floor(Math.random() * 3)];
    const expression = `${randNum1} ${operator} ${randNum2}`;
    const correctAnswer = expressions[operator](randNum1, randNum2);

    const youAnswer = getAnswer(expression);

    if (parseInt(youAnswer, 10) === correctAnswer) {
      console.log('Correct!');
    } else {
      incorrectResponse(youAnswer, userName, correctAnswer);
      break;
    }
    if (i === 3) { console.log(`Congratulations, ${userName}!`); }
  }
};

export default brainCalc;
