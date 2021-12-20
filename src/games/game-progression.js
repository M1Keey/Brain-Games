import makeRandom from '../random.js';

const rules = 'What number is missing in the progression?';

const getRoundGenerator = () => {
  const firstItem = makeRandom(20, 1);
  const step = makeRandom(6, 1) + 1;

  let question = [];
  const progression = [];

  const makeProgression = () => {
    progression.push(firstItem);
    for (let i = 0; i < 9; i += 1) {
      progression.push(progression[i] + step);
    } return progression;
  };
  makeProgression();
  const index = makeRandom(10, 0);
  const correctAnswer = progression[index];
  const result = progression;
  result[index] = '..';
  question = result;
  return [question, correctAnswer];
};
export { rules, getRoundGenerator };
