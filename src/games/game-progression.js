import gameLogic from '../index.js';
import makeRandom from '../random.js';

const rules = 'What number is missing in the progression?';

const progressionLength = 9;
const minItemValue = 1;
const maxItemValue = 20;
const minStepValue = 1;
const maxStepValue = 6;
const minIndexValue = 0;
const maxIndexValue = progressionLength + 1;

const makeProgression = (firstItem, step) => {
  const progression = [];
  progression.push(firstItem);
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progression[i] + step);
  } return progression;
};

const getRoundGenerator = () => {
  const firstItem = makeRandom(maxItemValue, minItemValue);
  const step = makeRandom(maxStepValue, minStepValue) + minStepValue;

  const randomIndex = makeRandom(maxIndexValue, minIndexValue);
  const progression = makeProgression(firstItem, step);
  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};
const progressionGame = () => gameLogic(rules, getRoundGenerator);

export default progressionGame;
