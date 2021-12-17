const makeRandom = (a, b) => {
  const randomNumber = Math.random() * (a - b);
  return Math.floor(randomNumber);
};

export default makeRandom;
