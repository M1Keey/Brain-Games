import makeRandom from '../random.js';

const rules = 'Find the greatest common divisor of given numbers.';
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
  const firstNum = makeRandom(50, 1);
  const secondNum = makeRandom(50, 1);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = String(gcd(firstNum, secondNum));
  return [question, correctAnswer];
};

export { rules, getRoundGenerator };
