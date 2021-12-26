import gameLogic from '../index.js';
import makeRandom from '../random.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const maxNumValue = 100;
const minNumVAlue = 1;

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= (num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  } return true;
};
const getRoundGenerator = () => {
  const num = makeRandom(maxNumValue, minNumVAlue);
  const question = num;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const primeGame = () => gameLogic(rules, getRoundGenerator);

export default primeGame;
