import makeRandom from '../random.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num > 1) {
    for (let i = 2; i < (num / 2); i += 1) {
      if (num % i === 0) {
        return false;
      }
    } return true;
  } return false;
};
const getRoundGenerator = () => {
  const num = makeRandom(100, 1);
  const question = num;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export { rules, getRoundGenerator };
