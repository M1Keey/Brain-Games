import readlineSync from 'readline-sync';

const gameLogic = (rules, roundGenerator) => {
  const rounds = 3;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rules);
  for (let i = 0; i < rounds; i += 1) {
    const [question, correctAnswer] = roundGenerator();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== String(correctAnswer)) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default gameLogic;
