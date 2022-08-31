import readlineSync from 'readline-sync';

const brainCalc = () => {
  function incorrectResponse(youAnswer, userName, correctAnswer) {
    console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  }

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('What is the result of the expression?');

  const operators = ['+', '-', '*'];
  const expressions = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };

  for (let i = 1; i <= 3; i += 1) {
    const randNum1 = Math.floor(Math.random() * 99) + 1;
    const randNum2 = Math.floor(Math.random() * 99) + 1;
    const operator = operators[Math.floor(Math.random() * 3)];
    const expression = `${randNum1} ${operator} ${randNum2}`;

    const question = `Question: ${expression}`;
    console.log(question);
    const correctAnswer = expressions[operator](randNum1, randNum2);
    const youAnswer = readlineSync.question('Your answer: ');

    if (parseInt(youAnswer, 10) === correctAnswer) {
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

export default brainCalc;
