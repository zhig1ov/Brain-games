import readlineSync from 'readline-sync';
// import sayHi from './cli.js';

const brainEven = () => {
  function incorrectResponse(youAnswer, userName, correctAnswer) {
    console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  }

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const random = Math.floor(Math.random() * 99) + 1;

    const question = `Question: ${random}`;
    console.log(question);
    const youAnswer = readlineSync.question('Your answer: ');
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
    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default brainEven;
