import makeRandom from '../random.js';
import gameLogic from '../index.js';

const rules = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
const minNumValue = 1;
const maxNumValue = 20;
const minOperationIndexValue = 0;
const maxOperationIndexValue = operations.length;

const getRoundGenerator = () => {
  const firstNum = makeRandom(maxNumValue, minNumValue);
  const secondNum = makeRandom(maxNumValue, minNumValue);
  const operationIndex = makeRandom(maxOperationIndexValue, minOperationIndexValue);
  const question = `${firstNum} ${operations[operationIndex]} ${secondNum}`;
  let correctAnswer;
  switch (operations[operationIndex]) {
    case '+':
      correctAnswer = firstNum + secondNum;
      break;
    case '-':
      correctAnswer = firstNum - secondNum;
      break;
    case '*':
      correctAnswer = firstNum * secondNum;
      break;
    default:
      throw new Error(`Operation ${operations[operationIndex]} is not supported`);
  }
  return [question, String(correctAnswer)];
};
const calcGame = () => gameLogic(rules, getRoundGenerator);

export default calcGame;
