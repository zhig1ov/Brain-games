import { responseCheck, getAnswer, howToAnswer } from './utils/utils.js';
import sayHi from './cli.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return 'no';
  }
  return (num > 1) ? 'yes' : 'no';
};

const brainPrime = () => {
  const userName = sayHi();

  howToAnswer('prime');

  for (let i = 1; i <= 3; i += 1) {
    const randomNum = Math.floor(Math.random() * 19) + 1;
    const correctAnswer = isPrime(randomNum);
    const youAnswer = getAnswer(randomNum);

    if (responseCheck(userName, youAnswer, correctAnswer) === 'stop') { break; }
    if (i === 3) { console.log(`Congratulations, ${userName}!`); }
  }
};

export default brainPrime;
