import readlineSync from 'readline-sync';

let num = 0;
const rounds = 3;

export const makeRandom = () => {
  const randomNumber = Math.random() * (100 - 1) + 1;
  num = Math.floor(randomNumber);
  return Math.floor(randomNumber);
};

export const parityCheck = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < rounds; i += 1) {
    console.log(`Question: ${makeRandom()}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === 'yes') {
      if ((num % 2) === 0) {
        console.log('Correct!');
      } else {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        console.log(`Let's try again,${userName}`);
        return;
      }
    }
    if (userAnswer === 'no') {
      if ((num % 2) !== 0) {
        console.log('Correct!');
      } else {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
        console.log(`Let's try again,${userName}`);
        return;
      }
    } else if (userAnswer !== 'yes' && userAnswer !== 'no') {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again,${userName}`);
      return;
    }
  } console.log(`Congratulations, ${userName}!`);
};
