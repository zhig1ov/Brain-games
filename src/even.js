import { responseCheck, getAnswer, howToAnswer } from './utils/utils.js';
import sayHi from './cli.js';

const isEven = (n) => (!(n % 2) ? 'yes' : 'no');

const brainEven = () => {
  const userName = sayHi();

  howToAnswer('even');

  for (let i = 1; i <= 3; i += 1) {
    const randomNum = Math.floor(Math.random() * 99) + 1;
    const correctAnswer = isEven(randomNum);
    const youAnswer = getAnswer(randomNum);

    if (responseCheck(userName, youAnswer, correctAnswer) === 'stop') { break; }
    if (i === 3) { console.log(`Congratulations, ${userName}!`); }
  }
};

export default brainEven;
