import { incorrectResponse, getAnswer } from './utils/utils.js';
import sayHi from './cli.js';

const brainEven = () => {
  const userName = sayHi();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const random = Math.floor(Math.random() * 99) + 1;

    const youAnswer = getAnswer(random);

    if (random % 2 === 0) {
      if (youAnswer === 'yes') {
        console.log('Correct!');
      } else if (youAnswer !== 'yes') {
        incorrectResponse(youAnswer, userName, 'yes');
        break;
      }
    } else if (random % 2 !== 0) {
      if (youAnswer === 'no') {
        console.log('Correct!');
      } else if (youAnswer !== 'no') {
        incorrectResponse(youAnswer, userName, 'no');
        break;
      }
    }
    if (i === 3) { console.log(`Congratulations, ${userName}!`); }
  }
};

export default brainEven;
