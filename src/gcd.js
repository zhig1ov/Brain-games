import readlineSync from 'readline-sync';

const brainGcd = () => {
  function incorrectResponse(youAnswer, userName, correctAnswer) {
    console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  }

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Find the greatest common divisor of given numbers.');

  function getGcd(a, b) {
    let numOne = Math.abs(a);
    let numTwo = Math.abs(b);
    if (numTwo > numOne) { const temp = numOne; numOne = numTwo; numTwo = temp; }
    /* eslint-disable no-constant-condition */
    while (true) {
      if (numTwo === 0) return numOne;
      numOne %= numTwo;
      if (numOne === 0) return numTwo;
      numTwo %= numOne;
    }
  }

  for (let i = 1; i <= 3; i += 1) {
    const randNum1 = Math.floor(Math.random() * 99) + 1;
    const randNum2 = Math.floor(Math.random() * 99) + 1;
    const expression = `${randNum1} ${randNum2}`;
    const correctAnswer = getGcd(randNum1, randNum2);

    const question = `Question: ${expression}`;
    console.log(question);
    const youAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === parseInt(youAnswer, 10)) {
      console.log('Correct!');
    } else {
      incorrectResponse(youAnswer, userName, correctAnswer);
      break;
    }

    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default brainGcd;
