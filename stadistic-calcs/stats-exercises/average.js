const listNums = [5, 2, 3, 4, 3, 8, 7, 9];

const getAverage = () => {
  const sumNumsList = listNums.reduce((a, i) => a + i);
  const average = sumNumsList / listNums.length;
  return average;
}

console.log(getAverage());