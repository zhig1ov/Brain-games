import { incorrectResponse, getAnswer, getGcd } from './utils/utils.js';
import sayHi from './cli.js';

const brainGcd = () => {
  const userName = sayHi();

  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 1; i <= 3; i += 1) {
    const randNum1 = Math.floor(Math.random() * 99) + 1;
    const randNum2 = Math.floor(Math.random() * 99) + 1;
    const expression = `${randNum1} ${randNum2}`;
    const correctAnswer = getGcd(randNum1, randNum2);

    const youAnswer = getAnswer(expression);

    if (correctAnswer === parseInt(youAnswer, 10)) {
      console.log('Correct!');
    } else {
      incorrectResponse(youAnswer, userName, correctAnswer);
      break;
    }
    if (i === 3) { console.log(`Congratulations, ${userName}!`); }
  }
};

export default brainGcd;
