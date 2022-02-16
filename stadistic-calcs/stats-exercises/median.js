const listNums = [ 100, 200, 500, 400000000 ];

const getAverage = list => {
  const sumList = list.reduce((acc = 0, item) => acc + item);
  const averageList = sumList / list.length;
  return averageList;
}

const isPair = num => (num % 2 === 0);

const sortedMedian = () => {
  const sortedSalaries = listNums.sort((iA, iB) => iA - iB);
  const medianGeneral = getMedian(sortedSalaries);
  return medianGeneral;
}

const getMedian = ()  => {
  const listNumbersHalf = parseInt(listNums.length / 2);
  if (isPair(listNums.length)) {
    const elemenOne = listNums[listNumbersHalf - 1];
    const elementTwo = listNums[listNumbersHalf];
    const bothElemetns = [ elemenOne, elementTwo ];
    const elementsAverage = getAverage(bothElemetns);
    const median = elementsAverage;
    return median;
  } else {
    const halfMedian = listNums[listNumbersHalf];
    return halfMedian;
  }
}

console.log(sortedMedian(listNums));
console.log(getMedian(listNums));