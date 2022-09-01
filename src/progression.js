import { incorrectResponse, getAnswer } from './utils/utils.js';
import sayHi from './cli.js';

const brainProgression = () => {
  const userName = sayHi();

  console.log('What number is missing in the progression?');

  for (let i = 1; i <= 3; i += 1) {
    const numbers = [];
    const arrayLength = Math.floor(Math.random() * 7) + 7;
    const step = Math.floor(Math.random() * 14) + 2;
    let initialNumber = Math.floor(Math.random() * 15) + 1;

    for (let j = 0; j <= arrayLength; j += 1) {
      numbers.push(initialNumber);
      initialNumber += step;
    }

    const numberToDelete = Math.floor(Math.random() * numbers.length + 1);
    const correctAnswer = numbers[numberToDelete];
    numbers[numberToDelete] = '..';
    const stringNumbers = numbers.join(' ');
    const youAnswer = getAnswer(stringNumbers);

    if (correctAnswer === parseInt(youAnswer, 10)) {
      console.log('Correct!');
    } else {
      incorrectResponse(youAnswer, userName, correctAnswer);
      break;
    }
    if (i === 3) { console.log(`Congratulations, ${userName}!`); }
  }
};

export default brainProgression;
