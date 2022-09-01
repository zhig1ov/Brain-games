import readlineSync from 'readline-sync';

const incorrectResponse = (youAnswer, userName, correctAnswer) => {
  console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
};

const getGcd = (a, b) => {
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
};

const getAnswer = (expression) => {
  const question = `Question: ${expression}`;
  console.log(question);
  const youAnswer = readlineSync.question('Your answer: ');
  return youAnswer;
};

const responseCheck = (userName, youAnswer, correctAnswer) => {
  if (correctAnswer === youAnswer) {
    return console.log('Correct!');
  }
  incorrectResponse(youAnswer, userName, correctAnswer);
  return 'stop';
};

export {
  getGcd, incorrectResponse, getAnswer, responseCheck,
};
