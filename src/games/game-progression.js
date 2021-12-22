import makeRandom from '../random.js';

const rules = 'What number is missing in the progression?';

const makeProgression = (firstItem, step) => {
  const progression = [];
  progression.push(firstItem);
  for (let i = 0; i < 9; i += 1) {
    progression.push(progression[i] + step);
  } return progression;
};

const getRoundGenerator = () => {
  const firstItem = makeRandom(20, 1);
  const step = makeRandom(6, 1) + 1;

  const index = makeRandom(10, 0);
  const progression = makeProgression(firstItem, step);
  const correctAnswer = String(progression[index]);
  progression[index] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};
export { rules, getRoundGenerator };
