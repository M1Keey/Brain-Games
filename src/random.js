const makeRandom = (a, b) => {
  const randomNumber = Math.random() * (a - b) + 1;
  return Math.floor(randomNumber);
};

export default makeRandom;
