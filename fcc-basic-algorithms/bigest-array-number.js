const arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

const largestOfFour = (arr) => {
  const getEachArray = arr.map(eachArray => {
    const getBiggestArrNum = eachArray.reduce((prev, current) => {
      const eachBiggestNum = current > prev ? current : prev;
      return eachBiggestNum;
    });
    return getBiggestArrNum;
  });
  console.log(getEachArray);
}

largestOfFour(arr);
