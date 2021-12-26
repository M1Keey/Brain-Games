import gameLogic from '../index.js';
import makeRandom from '../random.js';

const rules = 'Find the greatest common divisor of given numbers.';
const minNumValue = 1;
const maxNumValue = 50;

const gcd = (first, second) => {
  let a = first;
  let b = second;
  while (a !== 0 && b !== 0) {
    if (a % b === 0) {
      return b;
    }
    if (a > b) {
      a %= b;
    }
    if (a < b) {
      b %= a;
    }
  } return a + b;
};
const getRoundGenerator = () => {
  const firstNum = makeRandom(maxNumValue, minNumValue);
  const secondNum = makeRandom(maxNumValue, minNumValue);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = String(gcd(firstNum, secondNum));
  return [question, correctAnswer];
};
const gcdGame = () => gameLogic(rules, getRoundGenerator);

export default gcdGame;
