import readlineSync from 'readline-sync';

function incorrectResponse(youAnswer, userName, correctAnswer) {
  console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
}

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

function getAnswer(expression) {
  const question = `Question: ${expression}`;
  console.log(question);
  const youAnswer = readlineSync.question('Your answer: ');
  return youAnswer;
}

export { getGcd, incorrectResponse, getAnswer };
