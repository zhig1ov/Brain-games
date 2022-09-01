import { incorrectResponse, getAnswer } from './utils/utils.js';
import sayHi from './cli.js';

const isEven = n => !(n % 2) ? 'yes' : 'no';

const brainEven = () => {
  const userName = sayHi();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const randomNum = Math.floor(Math.random() * 99) + 1;
    const correctAnswer = isEven(randomNum);
    const youAnswer = getAnswer(randomNum);

    if (correctAnswer === youAnswer) {
      console.log('Correct!');
    } else {
      incorrectResponse(youAnswer, userName, correctAnswer);
      break;
    }
    if (i === 3) { console.log(`Congratulations, ${userName}!`); }
  }
};

export default brainEven;
