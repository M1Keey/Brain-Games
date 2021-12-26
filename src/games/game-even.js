import makeRandom from '../random.js';
import gameLogic from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => (num % 2 === 0);
const getRoundGenerator = () => {
  const num = makeRandom(100, 1);
  const question = num;
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const evenGame = () => gameLogic(rules, getRoundGenerator);

export default evenGame;
